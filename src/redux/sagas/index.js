import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {history} from '../../history'

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* submitArticle(action) {
  history.push(`/article/${action.payload.slug}`);
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* saga() {
  yield takeEvery("todos/add", submitArticle);
}

export default saga
