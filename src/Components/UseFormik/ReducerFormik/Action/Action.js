import { apiPostMethod, apiPutMethod }  from "../../../Api/MockApi";
import { ADD_USER, DELETE_REQUEST, DELETE_SUCCESS, EDIT_USER, GET_DATA } from "../Type/Type";

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
export const getData =   (data) => {  
    return {
        type:GET_DATA, 
        payload:data
    };
};

export const deletRequest = () => {
    return {
        type:DELETE_REQUEST
    };
};
export const deleteSuccess = () => {
    return {
        type:DELETE_SUCCESS
    }
};
export const editUser = (id,data) => {
    apiPutMethod(id,data);
    return {
        type:EDIT_USER
    }
};