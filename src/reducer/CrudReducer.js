import { CREATE_USER_NAME, CREATE_USER_PASSWORD, FETCH_USER_FAILED, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SUBMIT_FORM } from "../action/CrudAction";

 //initial value for state
const userData = {  
    allUser:[],
    userName:'',
    userPassword:''
};

//reducer function
export  function CrudReducer( state = userData,action) { 

    switch ( action.type ) {//here checking action have type or not

        case FETCH_USER_REQUEST:

            return state;

        case FETCH_USER_SUCCESS:

            return {
                ...state,
                payload:action.userInfo
            };

        case FETCH_USER_FAILED:

            return {
                ...state,
                payload:action.error
            };

        case CREATE_USER_NAME:
            
            return {
                ...state,
                //changing the username value with a payload which is sent form the dispatch 
                userName:action.payload 
            };

        case CREATE_USER_PASSWORD:

            return {
                ...state,
                //changing the userpassword value with a payload which is sent form the dispatch
                userPassword:action.payload 
            };

        case SUBMIT_FORM: 
            return {
                ...state,
                //updating the alluser with a usename and userpassword when submit action dispatched
                allUser:[...state.allUser,  
                    {
                        userName:state.userName,
                        userPassword:state.userPassword
                    },
                ],
                //here emptying the username and userpassword values 
                //because it will show the values in the input field after form submitted 
                userName:'',
                userPassword:'' 
            };

        default:
           //this return state is import if i omit this i will some problems in state object values
           return state; 
    };
};