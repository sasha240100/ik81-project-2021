import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import articlesReducer from "./reducers/articlesReducer";
import userReducer from "./reducers/userReducer";

import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { articles: articlesReducer, user: userReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
