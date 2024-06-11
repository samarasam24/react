import { ADD_USER, DELETE_USER, EDIT_USER, GET_DATA, UPDATE_USER } from "../Type/Type";

export const addUserData = (actionType,data) => { 
    return {
        type:actionType,
        payload:data
    }
};

export const addUser = (data) => { 
    return {
        type:ADD_USER,
        payload:data
    }
};

export const getData = () => {
    return {
        type:GET_DATA,
    }
};
export const deleteUser = (id) => {
    return {
        type:DELETE_USER,
        payload:id
    }
};
export const editUser = (id) => {
    return {
        type:EDIT_USER,
        payload:id
    }
};

export const updateUser = (obj) => {
    return {
        type:UPDATE_USER,
        payload:obj
    };
};