import { call, put, takeEvery } from "redux-saga/effects";
import { ADD_ITEM_REQUEST, FETCH_USER_REQUEST } from "../type/Type";
import axios from "axios";
import { MockApi } from "../apis/MockApi";
import {   adduserFormSuccess, fetchUserSucces } from "../actionCreater/ActionCreator";

function fethcItems() {
   return axios.get(MockApi)
         .then( res =>  res.data)
         .catch( err => err)
}; 
function integratedApi(action) {
     console.log(action.payload);
    return axios.post(MockApi,action.payload )
    .then(res => res.data)
}
function* addItemAPi(action) {
    try {
        const data = yield call(integratedApi,action)
        yield put(adduserFormSuccess(data));
    } catch (error) {
        
    }
};

function* fetchData() {
    try {
        const users = yield call(fethcItems); 
        yield put(fetchUserSucces(users));
    } catch (error) {
        console.error(error);
    }
};

export function* watcherSaga() {

    yield takeEvery(FETCH_USER_REQUEST,fetchData); 
    yield takeEvery(ADD_ITEM_REQUEST,addItemAPi);
};