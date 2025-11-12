import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../../../components/common/SectionTitle';

const WelcomeHeader = () => {
    const { user } = useSelector((state) => state.user);
    const userName = user ? user.fullName : 'Étudiant';

    return (
        <div className="text-center mb-8">
            <SectionTitle>Bienvenue, {userName} !</SectionTitle>
            <p className="text-lg text-gray-600">Voici un aperçu de votre parcours académique.</p>
        </div>
    );
};

export default WelcomeHeader;
