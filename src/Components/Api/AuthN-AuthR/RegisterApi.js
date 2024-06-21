import { baseUrl } from "./Api";
import axios from "axios";

const urlPost = '/api/auth/user/register';

export const authApiPost = async (payload) => {
    
    try {
        const response = await axios.post(baseUrl+urlPost,payload);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
};