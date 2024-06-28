import { baseUrl } from "./Api";
import axios from "axios";

const urlPost = '/api/auth/user/register';  

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


