import { applyMiddleware, createStore } from 'redux';
import { CrudReducer } from '../reducer/CrudReducer.js';
import createSagaMiddleware from '@redux-saga/core';
import { Watcherfecth } from '../sagas/Sagas.js';

const sagaMiddelWare = createSagaMiddleware();

export const store = createStore(CrudReducer,applyMiddleware(sagaMiddelWare));
sagaMiddelWare.run(Watcherfecth)