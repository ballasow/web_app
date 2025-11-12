export default function CourseCard({ course }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg">{course.name}</h3>
      <p className="text-gray-600 text-sm">{course.group}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {course.schedule}
        </span>
        <Link 
          to={`/teacher/grades?course=${course.id}`}
          className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200"
        >
          Saisir notes
        </Link>
      </div>
    </div>
  );
}