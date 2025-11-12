import React from 'react';
import Table from '../../../components/common/Table';
import SectionTitle from '../../../components/common/SectionTitle';

const RecentUsersTable = ({ users, isLoading }) => {
    const columns = [
        { header: 'Nom', accessor: 'name' },
        { header: 'Email', accessor: 'email' },
        { header: 'Rôle', accessor: 'role' },
    ];

    if (isLoading) {
        return (
            <div>
                <SectionTitle>Utilisateurs Récents</SectionTitle>
                <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
                    <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
                    <div className="h-8 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-8 bg-gray-300 rounded w-full"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <SectionTitle>Utilisateurs Récents</SectionTitle>
            <Table columns={columns} data={users} />
        </div>
    );
};

export default RecentUsersTable;
