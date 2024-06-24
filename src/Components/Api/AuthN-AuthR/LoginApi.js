import axios from "axios";
import { baseUrl } from "./Api";

const loginapi = '/api/auth/user/login';

export const apiLoginMethod = async (payload) => {
    try {
        const response = await axios.post(baseUrl+loginapi,payload);
        console.log('Response api',response);
        const data = await response.data;  
        return data;
    } catch (error) {
        const errorResponse = error.response.data.error;
        return errorResponse ;
    }
};