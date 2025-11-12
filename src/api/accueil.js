import { axiosInstance } from "./axios"


export const get_All_Articles_With_Images = async () => {
    try {
        const response = await axiosInstance.get('/ISTA/api/home/');
        return response.data;
    } 
    catch (error) {
        console.log(error);
        return { success: false, message : "Probleme de connection au server"}; 
    }
}

export const get_userProfil_Articles_With_Images = async () => {
    try {
        const response = await axiosInstance.get('/ISTA/api/home/profil');
        return response.data;
    } 
    catch (error) {
        console.log(error);
        return { success: false, message : "Probleme de connection au server"}; 
    }
}

export const get_User_Information = async () => {
    try {
        const response = await axiosInstance.get('/ISTA/api/home/user-information');
        return response.data;
    } 
    catch (error) {
        console.log(error);
        return { success: false, message: error.message || 'Erreur lors de la récupération des informations utilisateur' };
    }
}