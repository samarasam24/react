import { baseUrl } from "./Api";
import axios from "axios";

const urlPost = '/api/auth/user/register'; 
const adminUrl = '/api/auth/admin/register';

export const authApiPost = async (payload) => {
    
    try { 
        const response = await axios.post(baseUrl+urlPost,payload);
        const data = await response.data.data; 
        return {
            code:data.Status,
        };
    } catch (error) {
       const response = error.response;
       const errors = response.data;
       return {
            code:errors.error.code, 
            msg:errors.error.errorList
       };
    }
};


export const adminRegister = async (payload) =>  {
    try { 
        const response = await axios.post(baseUrl+adminUrl,payload);
        const data = await response.data.data; 
        return {
            code:data.Status,
        };
    } catch (error) {
       const response = error.response;
       console.log(response);
       const errors = response.data;
       return {
            code:errors.error.code, 
            msg:errors.error.errorList
       };
    }
};