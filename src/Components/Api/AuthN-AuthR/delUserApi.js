import axios from "axios";
import { baseUrl } from "./Api";

const delApi = '/api/user/deleteUser/';
export const delUserApi = async (payload,token) => {

    try {
        const response = await axios.delete(`${baseUrl}${delApi}${[payload]}`,{ 
            headers: { 
                Authorization: `Bearer ${token}`,
            }
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};