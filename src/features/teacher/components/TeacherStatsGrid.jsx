import React from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaPercentage } from 'react-icons/fa';

const StatCard = ({ icon, label, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow">
        <div className="text-3xl text-blue-600">{icon}</div>
        <div>
            <p className="text-gray-600">{label}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);

const TeacherStatsGrid = ({ stats, isLoading }) => {
    const icons = [<FaChalkboardTeacher />, <FaUserGraduate />, <FaPercentage />];

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
                {Array(3).fill(0).map((_, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="h-8 bg-gray-200 rounded w-1/4 mb-2"></div>
                        <div className="h-12 bg-gray-300 rounded w-1/2"></div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <StatCard key={index} icon={icons[index]} label={stat.label} value={stat.value} />
            ))}
        </div>
    );
};

export default TeacherStatsGrid;
