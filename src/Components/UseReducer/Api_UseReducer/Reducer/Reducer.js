import { ADD_USER, ADD_USERNAME, ADD_USERPASSWORD, GET_DATA } from "../Type/Type";

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
        console.log("getData-reducer");
            return {
                ...state,
                apiData:[
                    ...state.apiData,
                    action.payload
                ],
                lazzyLoader:false
            };
        default:
            return {
                ...state
            };
    };
};
 