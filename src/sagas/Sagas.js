import axios from "axios";
import { MockApi } from '../apis/MockApi.js';
import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_USER_REQUEST,fetchDataSuccess } from "../action/CrudAction";

function fetchApi() {
    return axios.get(MockApi)
    .then( res => res.data)
    .catch( err => err)
};

export function* WorkerFecth() {

    try {
        const data = yield call(fetchApi)
        yield put(fetchDataSuccess(data))
    } catch (error) {
        console.error(error);
    }
};

export function* Watcherfecth(){
    yield takeLatest(FETCH_USER_REQUEST,WorkerFecth);
};