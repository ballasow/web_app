import { axiosInstance } from './axios';

export const getPayments = async (userId) => {
    try {
        const res = await axiosInstance.get(`/ISTA/api/payments/${userId}`);
        return res.data;
    } catch (error) {
        console.warn('getPayments failed', error?.message);
        return { success: true, payments: [] };
    }
};

export const createPayment = async (payment) => {
    try {
        const res = await axiosInstance.post('/ISTA/api/payments', payment);
        return res.data;
    } catch (error) {
        console.warn('createPayment failed', error?.message);
        throw error;
    }
};
