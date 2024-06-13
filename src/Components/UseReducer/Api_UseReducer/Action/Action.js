import { apiGetMethod, apiPostMethod }  from "../../../Api/MockApi";
import { ADD_USER, GET_DATA } from "../Type/Type";

export const addUserDetail = (action,payload) => {
    return {
        type:action,
        payload
    };
};
export const addUser = (data) => {
    apiPostMethod(data);
    return {
        type:ADD_USER,
    };
};
export const getData =   () => { 
    console.log('action-js'); 
    return {
        type:GET_DATA, 
    };
};