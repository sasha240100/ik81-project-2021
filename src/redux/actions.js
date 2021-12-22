import { createAction } from "@reduxjs/toolkit";
import moment from 'moment';

export const addArticle = createAction("todos/add", (article) => ({
  payload: {
    ...article,
    date: moment().toISOString()
  },
}));