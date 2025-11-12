import React from 'react';
import { FaClock, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../components/common/PrimaryButton';

const UpcomingClass = ({ cls }) => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="font-bold text-gray-800">{cls.title}</p>
        <div className="flex items-center text-sm text-gray-600 mt-1">
            <FaClock className="mr-2" /> {cls.time}
        </div>
        <div className="flex items-center text-sm text-gray-600">
            <FaMapMarkerAlt className="mr-2" /> {cls.room}
        </div>
    </div>
);

const RecentSubmission = ({ submission }) => (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <p className="font-semibold">{submission.studentName}</p>
        <p className="text-sm text-gray-600">
            A soumis le devoir "{submission.assignment}" pour le cours de {submission.course}.
        </p>
    </div>
);

const TeacherDashboardContent = ({ data, isLoading }) => {
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
                <div>
                    <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="space-y-4">
                        <div className="h-20 bg-gray-300 rounded-lg"></div>
                        <div className="h-20 bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
                <div>
                    <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="space-y-4">
                        <div className="h-20 bg-gray-300 rounded-lg"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Colonne de gauche : Cours et Actions */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Prochains Cours</h3>
                <div className="space-y-4 mb-8">
                    {data.upcomingClasses.map(cls => <UpcomingClass key={cls.id} cls={cls} />)}
                </div>
                <PrimaryButton onClick={() => navigate('/teacher/grades')} className="w-full flex items-center justify-center">
                    <FaClipboardList className="mr-2" /> Saisir ou modifier les notes
                </PrimaryButton>
            </div>

            {/* Colonne de droite : Soumissions récentes */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Soumissions Récentes</h3>
                <div className="space-y-4">
                    {data.recentSubmissions.map(sub => <RecentSubmission key={sub.id} submission={sub} />)}
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboardContent;
