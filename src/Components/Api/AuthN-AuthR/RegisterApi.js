import { baseUrl } from "./Api";
import axios from "axios";

const urlPost = '/api/auth/user/register';  

export const authApiPost = async (payload) => {
    
    try { 
        const response = await axios.post(baseUrl+urlPost,payload);
        return  response.data.data; 
    } catch (error) {
       const response = error.response;
       return response.data;
    }
};


