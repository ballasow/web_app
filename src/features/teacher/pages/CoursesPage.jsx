// Composant : CoursesPage
// Rôle : Affiche la liste des cours gérés par un enseignant.
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import CourseCard from '../components/CourseCard';

export default function CoursesPage() {
  const [notifications] = useState([
    { id: 1, text: "Un nouveau cours vous a été attribué." },
    { id: 2, text: "Un étudiant a envoyé une question." },
  ]);
  const courses = [
    { id: 1, name: "Mathématiques", group: "L1", students: 30 },
    { id: 2, name: "Physique", group: "L2", students: 28 },
    { id: 3, name: "Informatique", group: "L3", students: 32 },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar navigation */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-700">Espace Enseignant</h2>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/teacher/dashboard" className="hover:text-blue-700">Tableau de bord</Link>
          <Link to="/teacher/courses" className="hover:text-blue-700 font-semibold">Mes cours</Link>
          <Link to="/teacher/grades" className="hover:text-blue-700">Saisie des notes</Link>
        </nav>
        <div className="mt-10">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <ul className="space-y-1 text-sm">
            {notifications.map(n => (
              <li key={n.id} className="text-gray-600">{n.text}</li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Mes Cours</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => toast('Téléchargement de la liste des cours...')}
          >
            Télécharger mes cours
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}