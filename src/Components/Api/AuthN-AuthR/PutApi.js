import axios from "axios";
import { baseUrl } from "./Api";

const putApi = '/api/user/update';

export const putApiMethod = async (payload,token) => {
    try {
        const response =  await axios.put( `${baseUrl}${putApi}`,payload, { 
            headers: { 
                Authorization: `Bearer ${token}`,
            }
        });
        return response;
    } catch (error) {
        console.error(error);
    }
};