// Composant : StudentDashboard
// Rôle : Tableau de bord principal pour l'étudiant, assemblant des composants modulaires.
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper.jsx';
import ErrorAlert from '@/components/common/ErrorAlert.jsx';
import WelcomeHeader from '@/features/student/components/WelcomeHeader';
import MyCourses from '@/features/student/components/MyCourses';
import UpcomingDeadlines from '@/features/student/components/UpcomingDeadlines';
import { useStudentDashboardData } from '@/features/student/hooks/useStudentDashboardData';

function StudentDashboard() {
    const { data, isLoading, error } = useStudentDashboardData();

    if (error) {
        return (
            <PageWrapper>
                <ErrorAlert message="Impossible de charger les données du tableau de bord." />
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <WelcomeHeader />
            <div className="space-y-8">
                <MyCourses courses={data.courses} isLoading={isLoading} />
                <UpcomingDeadlines deadlines={data.deadlines} isLoading={isLoading} />
            </div>
        </PageWrapper>
    );
}

export default StudentDashboard;

