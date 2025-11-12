import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Simule un appel API pour les données du tableau de bord étudiant
const fetchStudentData = (userId) => {
    console.log(`Fetching data for user ID: ${userId}`);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                courses: [
                    { id: 'C1', title: "Mathématiques Avancées", progress: 75, nextClass: "Demain, 10:00" },
                    { id: 'C2', title: "Physique Quantique", progress: 50, nextClass: "Aujourd'hui, 14:00" },
                    { id: 'C3', title: "Histoire de l'Art", progress: 90, nextClass: "Mercredi, 09:00" },
                ],
                deadlines: [
                    { id: 'D1', title: "Rendu Projet Physique", date: "2025-08-10" },
                    { id: 'D2', title: "Examen de Mathématiques", date: "2025-08-15" },
                ]
            });
        }, 1000);
    });
};

export const useStudentDashboardData = () => {
    const [data, setData] = useState({ courses: [], deadlines: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (user && user.id) {
            const getData = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetchStudentData(user.id);
                    setData(response);
                } catch (err) {
                    setError(err);
                } finally {
                    setIsLoading(false);
                }
            };
            getData();
        } else {
            // Gérer le cas où il n'y a pas d'utilisateur loggué
            setIsLoading(false);
        }
    }, [user]);

    return { data, isLoading, error, user };
};
