import { FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../action/CrudAction";

function CrudReducer( state,action) {

    switch ( action.type ) {

        case FETCH_USER_REQUEST:

            return state;

        case FETCH_USER_SUCCESS:

            return state;

        case FETCH_USER_FAILED:

            return state;

        default:

           return state;
    };
};