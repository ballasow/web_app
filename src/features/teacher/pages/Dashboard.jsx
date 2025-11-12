// Composant : TeacherDashboard
// Rôle : Tableau de bord principal pour les enseignants, assemblant des composants modulaires.
import React from 'react';
import PageWrapper from '@/components/common/PageWrapper.jsx';
import ErrorAlert from '@/components/common/ErrorAlert.jsx';
import WelcomeHeader from '@/features/teacher/components/WelcomeHeader';
import TeacherStatsGrid from '@/features/teacher/components/TeacherStatsGrid';
import TeacherDashboardContent from '@/features/teacher/components/TeacherDashboardContent';
import { useTeacherDashboardData } from '@/features/teacher/hooks/useTeacherDashboardData';

function TeacherDashboard() {
    const { data, isLoading, error } = useTeacherDashboardData();

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
                <TeacherStatsGrid stats={data.stats} isLoading={isLoading} />
                <TeacherDashboardContent data={data} isLoading={isLoading} />
            </div>
        </PageWrapper>
    );
}

export default TeacherDashboard;
