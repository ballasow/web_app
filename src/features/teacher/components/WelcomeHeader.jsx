import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../../../components/common/SectionTitle';

const WelcomeHeader = () => {
    const { user } = useSelector((state) => state.user);
    const userName = user ? user.fullName : 'Enseignant';

    return (
        <div className="mb-8">
            <SectionTitle>Tableau de bord de {userName}</SectionTitle>
            <p className="text-lg text-gray-600">Gérez vos cours, vos étudiants et vos notes en un seul endroit.</p>
        </div>
    );
};

export default WelcomeHeader;
