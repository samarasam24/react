import axios from "axios";
import { baseUrl } from "./Api";

const adminUrl = '/api/admin/getAllusers';

export const getAlluserAdmin = async (access) => {
    try {
        const response = await axios.get(baseUrl+adminUrl,{
            headers:{
                Authorization:`Bearer ${access}`
            }
        }); 
        return response.data;
    } catch (error) {
        return error;
    }
};