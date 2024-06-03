import { CREATE_USER_NAME,CREATE_USER_PASSWORD, FETCH_USER_SUCCESS } from '../action/CrudAction.js'
const initialValue = {
    userName:'',
    userPassword:'',
    error:'',
    id:[],
    allUser:[]
};
export function CrudReducer( state = initialValue,action ) {
    switch(action.type){
        case CREATE_USER_NAME:
            return {
                ...state,
                userName:action.payload
            };
        case CREATE_USER_PASSWORD:
            return {
                ...state,
                userPassword:action.payload
            };
        case FETCH_USER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                id:action.payload
            }
        default:
            return state;
    };
};