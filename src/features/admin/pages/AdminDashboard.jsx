// Composant : AdminDashboard
// Rôle : Tableau de bord principal pour les administrateurs, utilisant des composants modulaires.
import React from 'react';
import useAdminDashboardData from '@/features/admin/hooks/useAdminDashboardData';
import StatGrid from '@/features/admin/components/StatGrid';
import QuickActions from '@/features/admin/components/QuickActions';
import RecentUsersTable from '@/features/admin/components/RecentUsersTable';
import PageWrapper from '@/components/common/PageWrapper.jsx';
import SectionTitle from '@/components/common/SectionTitle.jsx';
import ErrorAlert from '@/components/common/ErrorAlert.jsx';

function AdminDashboard() {
    const { data, isLoading, error } = useAdminDashboardData();

    if (error) {
        return (
            <PageWrapper>
                <ErrorAlert message="Impossible de charger les données du tableau de bord." />
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <SectionTitle>Tableau de bord Administrateur</SectionTitle>
            
            <div className="space-y-8">
                {/* Grille de statistiques */}
                <StatGrid stats={data?.stats} isLoading={isLoading} />

                {/* Section des actions rapides */}
                <QuickActions />

                {/* Tableau des utilisateurs récents */}
                <RecentUsersTable users={data?.recentUsers} isLoading={isLoading} />
            </div>
        </PageWrapper>
    );
}

export default AdminDashboard;