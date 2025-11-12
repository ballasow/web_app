// src/components/CourseList.jsx
export default function CourseList({ courses = [] }) {
  return (
    <div className="space-y-2">
      {courses.length === 0 && <p className="text-gray-500">Aucun cours disponible.</p>}
      {courses.map((course, index) => (
        <div key={index} className="p-3 bg-gray-50 rounded border border-gray-200">
          <p className="font-medium text-gray-800">{course.name}</p>
          <p className="text-sm text-gray-500">Professeur : {course.teacher}</p>
        </div>
      ))}
    </div>
  );
}
