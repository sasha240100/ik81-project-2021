import { createAction, createReducer } from "@reduxjs/toolkit";

const initialUser = {
  name: 'Alex Buzin'
}

export default createReducer(initialUser, (builder) => {
  // builder.addCase(addArticle, (state, action) => [...state, action.payload]);
});
