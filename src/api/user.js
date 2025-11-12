import { axiosInstance } from "./axios";


export const read_A_Articles = async (topic, name) => {
     try {
        const response = await axiosInstance.get(`/ISTA/api/home/access-article/${topic}/${name}`);
        return response.data;
    } 
    catch (error) {
        console.log(error);
        return error.message; 
    }
}