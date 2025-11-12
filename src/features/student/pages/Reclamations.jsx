// Composant : Reclamations
// Rôle : Permet à un étudiant de soumettre une réclamation.
import { useState } from "react";
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import ReclamationForm from "../../../components/common/ReclamationForm";

export default function Reclamations() {
  const [notifications] = useState([
    { id: 1, text: "Votre réclamation a été traitée." },
    { id: 2, text: "Un nouveau message de l'administration." },
  ]);
  const handleReclamationSubmit = (message) => {
  toast.success("Réclamation envoyée : " + message);
  };
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar navigation */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-700">Menu étudiant</h2>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/student/dashboard" className="hover:text-blue-700">Tableau de bord</Link>
          <Link to="/student/courses" className="hover:text-blue-700">Mes cours</Link>
          <Link to="/student/grades" className="hover:text-blue-700">Mes notes</Link>
          <Link to="/student/schedule" className="hover:text-blue-700">Emploi du temps</Link>
          <Link to="/student/payment" className="hover:text-blue-700">Paiement</Link>
          <Link to="/student/reclamations" className="hover:text-blue-700 font-semibold">Réclamations</Link>
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
        <h1 className="text-2xl font-bold mb-4">Réclamations</h1>
        <ReclamationForm onSubmit={handleReclamationSubmit} />
      </main>
    </div>
  );
}
