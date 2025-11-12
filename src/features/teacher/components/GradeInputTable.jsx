export default function GradeInputTable({ students, grades, setGrades }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Étudiant</th>
            <th className="p-3 text-left">Note (/20)</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{student.name}</td>
              <td className="p-3">
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={grades[student.id] || ''}
                  onChange={(e) => 
                    setGrades({ ...grades, [student.id]: e.target.value })
                  }
                  className="border rounded w-16 p-1 focus:ring-2 focus:ring-blue-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}