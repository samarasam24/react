// import { legacy_createStore as createStore } from "redux";
import { CrudReducer } from "../reducer/CrudReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import { mySaga } from "../sagas/Sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({reducer:CrudReducer,middleware:[sagaMiddleware]});
sagaMiddleware.run(mySaga)