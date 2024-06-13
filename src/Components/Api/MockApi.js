import axios from "axios";

export const MockApi = 'https://65b1d9849bfb12f6eafc3b4b.mockapi.io/Vehicle-Registration';

export const apiPostMethod = async (payload) => {
    try {
        const response = await axios.post(MockApi,payload);
        const data = await response.data; 
        return data;
    } catch (error) {
        console.error(error);
    }
    
};

export const apiGetMethod = async () => {
    try {
        const response = await axios.get(MockApi);
        const data = await response.data;
        return data;    
    } catch (error) {
        console.error(error);
    }
};

export const apiDeleteMethod = async (id) => {
    try {
      const response = await  axios.delete(`${MockApi}/${id}`)
      const status = response.status;
      return status;
     
    } catch (error) {
        console.error(error);
    }
};

export const apiPutMethod = async (id,data) => {
    try {
        axios.put(`${MockApi}/${id}`,data)
    } catch (error) {
        console.error(error);
    }
};

export const apiGetByIdMethod = async (id) => {

    try { 
        const response = await axios.get(`${MockApi}/${id}`)
        const data = await response.data
        return  data
    } catch (error) {
        console.error(error);
    }
};