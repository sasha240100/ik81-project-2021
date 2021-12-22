import { createAction, createReducer } from "@reduxjs/toolkit";
import articlesData from "../../data/articles.json";

import { addArticle } from "../actions";

export default createReducer(articlesData, (builder) => {
  builder.addCase(addArticle, (state, action) => [...state, action.payload]);
});
