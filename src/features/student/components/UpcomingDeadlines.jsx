import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const DeadlineCard = ({ deadline }) => {
    const deadlineDate = new Date(deadline.date);
    const today = new Date();
    const daysRemaining = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
    
    let bgColor = 'bg-gray-100';
    if (daysRemaining <= 3) bgColor = 'bg-red-100';
    else if (daysRemaining <= 7) bgColor = 'bg-yellow-100';

    return (
        <div className={`p-4 rounded-lg shadow-sm flex items-center ${bgColor}`}>
            <FaExclamationTriangle className={`mr-4 ${daysRemaining <= 3 ? 'text-red-500' : 'text-yellow-500'}`} />
            <div>
                <p className="font-semibold text-gray-800">{deadline.title}</p>
                <p className="text-sm text-gray-600">
                    Date limite : {deadlineDate.toLocaleDateString()} ({daysRemaining} jour(s) restant(s))
                </p>
            </div>
        </div>
    );
};

const UpcomingDeadlines = ({ deadlines, isLoading }) => {
    if (isLoading) {
        return (
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Échéances à Venir</h2>
                <div className="space-y-4 animate-pulse">
                    <div className="h-16 bg-gray-200 rounded-lg w-full"></div>
                    <div className="h-16 bg-gray-200 rounded-lg w-full"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Échéances à Venir</h2>
            <div className="space-y-4">
                {deadlines.map(deadline => (
                    <DeadlineCard key={deadline.id} deadline={deadline} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingDeadlines;
