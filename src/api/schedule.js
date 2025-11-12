import { axiosInstance } from './axios';

export const getScheduleForStudent = async (studentId) => {
    try {
        const res = await axiosInstance.get(`/ISTA/api/students/${studentId}/schedule`);
        return res.data;
    } catch (error) {
        console.warn('getScheduleForStudent failed, returning mock', error?.message);
        return { success: true, schedule: [
            { id: 'S1', title: 'Mathématiques - 1ère Année', time: '2025-11-12 10:00', room: 'Salle 101' },
            { id: 'S2', title: 'Physique - 2ème Année', time: '2025-11-12 14:00', room: 'Salle 203' },
        ] };
    }
};
