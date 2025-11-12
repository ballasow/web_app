import { axiosInstance } from "./axios"

// Récupère les statistiques du dashboard admin
export const getDashboardStats = async () => {
    try {
    const response = await axiosInstance.get('/ISTA/api/admin/dashboard-stats');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const create_Article = async (articleForm) => {
    try {
        const response = await axiosInstance.post('/ISTA/api/admin/create-Article', articleForm, {headers: {'Content-Type': 'multipart/form-data'}});
        return response.data
    } 
    catch (error) {
        console.log(error)
        return error;
    }
}

export const update_Article = async (article) => {
    try {
        const response = await axiosInstance.post('/ISTA/api/admin/updateArt', article, {headers: {'Content-Type': 'multipart/form-data'}});
        return response.data
    } 
    catch (error) {
        console.log(error)
        return error;
    }
}

export const delete_Article = async (article) => {
    try {
        const response = await axiosInstance.post('/ISTA/api/admin/deleteArt', article);
        console.log(response.data)
        return response.data
    } 
    catch (error) {
        console.log(error)
        return error;
    }
}