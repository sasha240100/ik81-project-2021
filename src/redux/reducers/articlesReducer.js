import { createAction, createReducer } from "@reduxjs/toolkit";

import { addArticle, deleteArticle, initArticles } from "../actions";

export default createReducer([], (builder) => {
  builder.addCase(initArticles, (state, action) => action.payload);
  builder.addCase(addArticle, (state, action) => [...state, action.payload]);
  builder.addCase(deleteArticle, (state, action) =>
    state.filter((article) => article._id !== action.payload)
  );
});
