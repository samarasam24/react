import { CrudReducer } from "../reducer/CrudReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import { mySaga } from "../sagas/Sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore( { reducer:CrudReducer,  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), } );
sagaMiddleware.run(mySaga);