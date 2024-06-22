import axios from "axios";
import { baseUrl } from "./Api";

const getApi = '/api/user/getUser/';

export const getUserMethod = async (payload,token) => { 

    try { 
        const response = await axios.get(`${baseUrl}${getApi}${payload}`,{
            headers: {
                Authorization: `Bearer ${token}`,
              }, 
        }); 
        return response.data;
    } catch (error) {
        console.error(error);
    }
};