import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Simule un appel API pour les données du tableau de bord de l'enseignant
const fetchTeacherData = (teacherId) => {
    console.log(`Fetching data for teacher ID: ${teacherId}`);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                stats: [
                    { label: "Cours Actifs", value: 4 },
                    { label: "Étudiants", value: 85 },
                    { label: "Taux de réussite moyen", value: "88%" },
                ],
                upcomingClasses: [
                    { id: 'C1', title: "Mathématiques - 1ère Année", time: "Aujourd'hui, 10:00", room: "Salle 101" },
                    { id: 'C2', title: "Physique - 2ème Année", time: "Aujourd'hui, 14:00", room: "Salle 203" },
                    { id: 'C3', title: "Mathématiques - 1ère Année", time: "Demain, 10:00", room: "Salle 101" },
                ],
                recentSubmissions: [
                    { id: 'S1', studentName: "Moussa Koné", course: "Physique", assignment: "Devoir 1" },
                    { id: 'S2', studentName: "Aminata Diallo", course: "Mathématiques", assignment: "Projet Final" },
                ]
            });
        }, 1000);
    });
};

export const useTeacherDashboardData = () => {
    const [data, setData] = useState({ stats: [], upcomingClasses: [], recentSubmissions: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (user && user.id) {
            const getData = async () => {
                try {
                    setIsLoading(true);
                    const response = await fetchTeacherData(user.id);
                    setData(response);
                } catch (err) {
                    setError(err);
                } finally {
                    setIsLoading(false);
                }
            };
            getData();
        } else {
            setIsLoading(false);
        }
    }, [user]);

    return { data, isLoading, error, user };
};
