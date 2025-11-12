import React from 'react';
import { FaBook, FaClock } from 'react-icons/fa';

const CourseProgressCard = ({ course }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-3">
                <FaBook className="text-blue-500 mr-3 text-xl" />
                <h3 className="font-bold text-gray-800">{course.title}</h3>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p className="text-right text-sm font-medium text-gray-700">{course.progress}% complété</p>
            <div className="flex items-center text-sm text-gray-500 mt-3">
                <FaClock className="mr-2" />
                <span>Prochain cours : {course.nextClass}</span>
            </div>
        </div>
    );
};

const MyCourses = ({ courses, isLoading }) => {
    if (isLoading) {
        return (
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mes Cours Actuels</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
                    {Array(3).fill(0).map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                            <div className="h-2.5 bg-gray-300 rounded-full w-full mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mt-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mes Cours Actuels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <CourseProgressCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default MyCourses;
