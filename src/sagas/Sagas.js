import axios from "axios";
import {MockApi} from '../apis/MockApi.js'
import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../action/CrudAction";

function userFetch() {
   return axios.get(MockApi)
    .then( res => {
        console.log(res.data);
        return res.data })
    .catch( err => { console.error(err);})
    
};

function* getUsersFetch() {
    try {
        const userInfo = yield call(userFetch);
        yield put( { type:FETCH_USER_SUCCESS,userInfo } );
    } catch ( error ) {
        yield put( { type:FETCH_USER_FAILED,error } );
    }
};

export function* mySaga() {
    yield takeLatest(FETCH_USER_REQUEST, getUsersFetch);
}

