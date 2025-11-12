import React from 'react';
import StatWidget from '../../../components/common/StatWidget';

const StatGrid = ({ stats, isLoading }) => {
    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Squelette pour le chargement */}
                {Array(3).fill(0).map((_, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md animate-pulse">
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
                <StatWidget key={index} icon={stat.icon} label={stat.label} value={stat.value} />
            ))}
        </div>
    );
};

export default StatGrid;
