import { axiosInstance } from './axios';

export const getStudents = async () => {
    try {
        const res = await axiosInstance.get('/ISTA/api/admin/students');
        return res.data;
    } catch (error) {
        console.warn('getStudents failed, returning mock', error?.message);
        // Fallback mock data
        return {
            success: true,
            students: [
                { id: 1, name: 'Balla Sow', email: 'balla@technolab.com', role: 'Étudiant' },
                { id: 2, name: 'Aminata Diallo', email: 'aminata@technolab.com', role: 'Étudiant' },
            ]
        };
    }
};

export const getStudentById = async (studentId) => {
    try {
        const res = await axiosInstance.get(`/ISTA/api/students/${studentId}`);
        return res.data;
    } catch (error) {
        console.warn('getStudentById failed, returning mock', error?.message);
        return {
            success: true,
            student: { id: studentId, name: 'Balla Sow', email: 'balla@technolab.com', role: 'Étudiant', filiere: 'Informatique', phone: '+221770000000' }
        };
    }
};

export const createStudent = async (student) => {
    try {
        const res = await axiosInstance.post('/ISTA/api/admin/students', student);
        return res.data;
    } catch (error) {
        console.warn('createStudent failed', error?.message);
        throw error;
    }
};

export const updateStudent = async (student) => {
    try {
        const res = await axiosInstance.patch(`/ISTA/api/admin/students/${student.id}`, student);
        return res.data;
    } catch (error) {
        console.warn('updateStudent failed', error?.message);
        throw error;
    }
};

export const deleteStudent = async (studentId) => {
    try {
        const res = await axiosInstance.delete(`/ISTA/api/admin/students/${studentId}`);
        return res.data;
    } catch (error) {
        console.warn('deleteStudent failed', error?.message);
        throw error;
    }
};
