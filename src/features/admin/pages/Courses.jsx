import { useState } from "react";

export default function AdminCourses() {
  const [courses] = useState([
    { id: 1, name: "Mathématiques", teacher: "M. Diarra" },
    { id: 2, name: "Physique", teacher: "Mme Konaté" },
    { id: 3, name: "Informatique", teacher: "M. Traoré" },
  ]);
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Gestion des cours</h1>
      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Cours</th>
            <th className="p-2 border">Enseignant</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c.id} className="border-t">
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.teacher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
