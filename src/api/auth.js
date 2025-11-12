import { axiosInstance } from "./axios";


export const siginAPI = async (formData) => {
    try {
        const response = await axiosInstance.post('/ISTA/api/auth/signin', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('Login reponse')
        console.log(response.data)
        
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const loginAPI = async (user) => {
    try {
        const response = await axiosInstance.post('/ISTA/api/auth/login', user);
        console.log('Login reponse')
        console.log(response.data)
        return response.data
    } 
    catch (error) {
        console.log(error)
        return error;
    }
}

export const forgotPassw = async (user) => {
    try {
        const response = await axiosInstance.post('/kunanFoni/api/auth/forgotPassW', user);
        return response.data
    } 
    catch (error) {
        console.log(error)
        return error;
    }
}

export const changePassw = async (user) => {
    try {
        const response = await axiosInstance.patch('/kunanFoni/api/auth/changePassW', user);
        return response.data
    } 
    catch (error) {
        console.log(error)
        return error;
    }
}