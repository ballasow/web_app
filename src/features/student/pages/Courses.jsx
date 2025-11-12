// Composant : Courses
// Rôle : Affiche la liste des cours pour un étudiant.
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import CourseList from "../../../components/common/CourseList";

export default function Courses() {
  const [notifications] = useState([
    { id: 1, text: "Un nouveau cours a été ajouté." },
    { id: 2, text: "Votre emploi du temps a été mis à jour." },
  ]);
  const courses = [
    { name: "Mathématiques", teacher: "M. Diarra" },
    { name: "Physique", teacher: "Mme Konaté" },
    { name: "Informatique", teacher: "M. Traoré" },
  ];
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar navigation */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-700">Menu étudiant</h2>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/student/dashboard" className="hover:text-blue-700">Tableau de bord</Link>
          <Link to="/student/courses" className="hover:text-blue-700 font-semibold">Mes cours</Link>
          <Link to="/student/grades" className="hover:text-blue-700">Mes notes</Link>
          <Link to="/student/schedule" className="hover:text-blue-700">Emploi du temps</Link>
          <Link to="/student/payment" className="hover:text-blue-700">Paiement</Link>
          <Link to="/student/reclamations" className="hover:text-blue-700">Réclamations</Link>
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
          <h1 className="text-2xl font-bold">Mes cours</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => toast('Téléchargement de la liste des cours...')}
          >
            Télécharger mes cours
          </button>
        </div>
        <CourseList courses={courses} />
      </main>
    </div>
  );
}
