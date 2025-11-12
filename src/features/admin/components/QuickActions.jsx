import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus, FaChalkboardTeacher, FaBookMedical, FaFileInvoiceDollar } from "react-icons/fa";
import PrimaryButton from '../../../components/common/PrimaryButton';

const QuickActions = () => {
    const navigate = useNavigate();

    const actions = [
        { label: "Gérer Étudiants", icon: <FaUserPlus className="mr-2" />, path: "/admin/students" },
        { label: "Gérer Enseignants", icon: <FaChalkboardTeacher className="mr-2" />, path: "/admin/teachers" },
        { label: "Gérer Cours", icon: <FaBookMedical className="mr-2" />, path: "/admin/courses" },
        { label: "Gérer Paiements", icon: <FaFileInvoiceDollar className="mr-2" />, path: "/admin/payments" },
    ];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Actions Rapides</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {actions.map((action, index) => (
                    <PrimaryButton key={index} onClick={() => navigate(action.path)} className="flex items-center justify-center">
                        {action.icon}
                        {action.label}
                    </PrimaryButton>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
