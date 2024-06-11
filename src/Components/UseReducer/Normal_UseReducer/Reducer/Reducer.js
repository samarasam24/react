import { ADD_USER, ADD_USERNAME, ADD_USERPASSWORD, DELETE_USER, EDIT_USER, GET_DATA, UPDATE_USER } from "../Type/Type";

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
        
        const [ { userName,userPassword } ] =  state.allUser.filter((value) => 
            ( value.id === action.payload && value.userName)); 
        
        return {
                ...state,
                userName:userName,
                userPassword:userPassword
            };
        case UPDATE_USER: 
        const newData = state.allUser.splice(action.payload.id,1,action.payload)
        console.log(newData);
            return {
                ...state,
                userName:'',
                userPassword:''
            }
        default:
           return {
            ...state
           };
    }
};