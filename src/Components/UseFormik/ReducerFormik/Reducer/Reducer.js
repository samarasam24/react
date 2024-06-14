import { ADD_USER, ADD_USERNAME, ADD_USERPASSWORD, DELETE_REQUEST, DELETE_SUCCESS, GET_DATA } from "../Type/Type";

export const userDetails =  {
    apiData:[],
    userName:'',
    userPassword:'',
    lazzyLoader:true
};


export const  Reducer = (state,action) => {

    switch(action.type) {
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
        case ADD_USER:   
            return {
                ...state,
                userName:'',
                userPassword:''
            };
        case GET_DATA:  
            return {
                ...state,
                apiData:[
                    ...action.payload
                ],
                lazzyLoader:false
            };
        case DELETE_REQUEST:
            return {
                ...state,
                lazzyLoader:true
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                lazzyLoader:false
            };
        default:
            return {
                ...state
            };
    };
};
 