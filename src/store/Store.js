import { applyMiddleware, legacy_createStore } from "redux";
import { CrudReducer } from "../reducer/CrudReducer";
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "../sagas/Sagas";

const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = legacy_createStore(    
    CrudReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleWare)
    )
);

sagaMiddleWare.run(watcherSaga);