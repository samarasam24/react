import axios from "axios";
import {MockApi} from '../apis/MockApi.js'
import { call, put, take } from "redux-saga/effects";
import { FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../action/CrudAction";

function userFetch() {

    axios.get(MockApi)
    .then( res => res.data )
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

    while( true) {
        yield take( FETCH_USER_REQUEST );
        yield call( getUsersFetch );
    };

};