import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {client} from '../../client'
import { initArticles } from "../actions";

import {history} from '../../history'

const ArticlesApi = {
  getArticles: () => client.get("/articles"),
  createArticle: (article) => client.post("/article", article),
  deleteArticle: (articleId) => client.delete(`/article/${articleId}`),
};

function* fetchAllArticles() {
  const {data: articles} = yield call(ArticlesApi.getArticles);

  yield put(initArticles(articles));
}

function* submitArticle(action) {
  const article = action.payload;

  yield call(ArticlesApi.createArticle, article);
  history.push(`/article/${article.slug}`);
}

function* deleteArticle(action) {
  const articleId = action.payload;

  yield call(ArticlesApi.deleteArticle, articleId);
  history.push(`/`);
}

function* saga() {
  yield fetchAllArticles()

  yield takeEvery("articles/add", submitArticle);
  yield takeEvery("articles/delete", deleteArticle);
}

export default saga
