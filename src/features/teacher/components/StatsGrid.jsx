// src/components/teacher/StatsGrid.jsx
export default function StatsGrid({ coursesCount, studentsCount }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium text-gray-500">Cours assignés</h3>
        <p className="text-3xl font-bold">{coursesCount}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-medium text-gray-500">Étudiants</h3>
        <p className="text-3xl font-bold">{studentsCount}</p>
      </div>
    </div>
  );
}