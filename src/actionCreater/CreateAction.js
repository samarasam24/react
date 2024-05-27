import { FETCH_USER_FAILED, FETCH_USER_REQUEST } from "../action/CrudAction";

export const fecth_User_Request = () => {
    return {
        type:FETCH_USER_REQUEST,
    }
}; 

export const fetc_User_Failed = () => {
    return {
        type:FETCH_USER_FAILED,
    }
};