import { ADD_USER, ADD_USERNAME, ADD_USERPASSWORD, DELETE_USER, EDIT_USER, GET_DATA } from "../Type/Type";

export const initialValue = {
    allUser:[],
    userName:'',
    userPassword:''
};

export function Reducer( state,action ) { 
    switch (action.type) {
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
            return{
                ...state,
                allUser:[
                    ...state.allUser,
                    action.payload
                ],
                userName:'',
                userPassword:''
            } 
        case GET_DATA: 
            return {
                ...state
            };
        case DELETE_USER: 
            return {
                ...state,
                allUser:state.allUser.filter( value  => value.id !== action.payload )
            };
        case EDIT_USER: ;
              const editName = state.allUser.reduce((_,value) => ( value.id === action.payload ?  value.userName : '' ));
            return {
                ...state,
                userName:editName.userName,
                userPassword:''
            };
        default:
           return {
            ...state
           };
    }
};