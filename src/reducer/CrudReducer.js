import { ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, ADD_USERNAME, ADD_USERPASSWORD, FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../type/Type";

 const initialValue = {
    allUser:[],
    userName:'',
    userPassword:''
 };

export const CrudReducer = ( state=initialValue,action ) => {

    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state
            };
        case FETCH_USER_SUCCESS: 
            return {
                ...state,
               allUser:action.payload
            };
        case FETCH_USER_FAILED:
            return {
                ...state
            };
        case ADD_USERNAME:
            return {
                ...state,
                userName:action.payload
            };
        case ADD_USERPASSWORD:
            return {
                ...state,
                userPassword:action.payload
            };
        case ADD_ITEM_REQUEST:
            return {
                ...state,
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                allUser:[...state.allUser,action.payload]
            }
        default:
            return {
                ...state
            };
    };
 };