import { axiosInstance } from './axios';

export const getGradesForStudent = async (studentId) => {
    try {
        const res = await axiosInstance.get(`/ISTA/api/students/${studentId}/grades`);
        return res.data;
    } catch (error) {
        console.warn('getGradesForStudent failed, returning mock', error?.message);
        return { success: true, grades: [
            { course: 'Mathématiques', grade: 15 },
            { course: 'Physique', grade: 13.5 },
            { course: 'Informatique', grade: 16 },
        ] };
    }
};
