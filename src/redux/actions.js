import { createAction } from "@reduxjs/toolkit";
import moment from 'moment';

export const initArticles = createAction("articles/init", (articles) => ({
  payload: articles,
}));

export const deleteArticle = createAction("articles/delete", (articleId) => ({
  payload: articleId,
}));

export const addArticle = createAction("articles/add", (article) => ({
  payload: {
    ...article,
    date: moment().toISOString(),
  },
}));