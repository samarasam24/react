import {  ADD_ITEM_REQUEST, ADD_ITEM_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../type/Type";


export const addUser = (action,data) => (
    {
        type:action,
        payload:data
    }
);
export const addUserForm = (data) => {
    
return    {
        type:ADD_ITEM_REQUEST,
        payload:data
    }
};
export const fecthUserRequest = () => (
    {
        type:FETCH_USER_REQUEST
    }
);
export const fetchUserSucces = (data) => (
    {
        type:FETCH_USER_SUCCESS,
        payload:data
    }
);
export const adduserFormSuccess =(data) => {
    console.log(data);
    return {
        type:ADD_ITEM_SUCCESS,
        payload:data
    }
};