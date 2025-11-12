
import { useState } from "react";
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import GradeInputTable from '../components/GradeInputTable';
import { postGrades } from '@/api/teacher';
import { useMutation } from '@tanstack/react-query';

export default function GradesPage() {
  const [notifications] = useState([
    { id: 1, text: "Vous avez 3 notes à saisir." },
    { id: 2, text: "Un étudiant a envoyé une réclamation." },
  ]);
  // For demo purposes we keep a local list — in real app this comes from API
  const students = [
    { id: 1, name: "Balla Sow" },
    { id: 2, name: "Aminata Diallo" },
    { id: 3, name: "Moussa Koné" },
  ];
  const [grades, setGrades] = useState({});

  const mutation = useMutation({
    mutationFn: postGrades,
    onSuccess: (data) => {
        toast.success(data.message || 'Notes enregistrées avec succès.');
    },
    onError: (err) => {
      console.error(err);
        toast.error("Erreur lors de l'enregistrement des notes.");
    }
  });

  const handleSave = async () => {
    // Build payload: courseId optional for this demo
    const payload = { courseId: 'demo-course', grades };
    mutation.mutate(payload);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar navigation */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-700">Espace Enseignant</h2>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/teacher/dashboard" className="hover:text-blue-700">Tableau de bord</Link>
          <Link to="/teacher/courses" className="hover:text-blue-700">Mes cours</Link>
          <Link to="/teacher/grades" className="hover:text-blue-700 font-semibold">Saisie des notes</Link>
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
          <h1 className="text-2xl font-bold">Saisie des notes</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => toast('Téléchargement du relevé de notes...')}
          >
            Télécharger relevé
          </button>
        </div>
        <GradeInputTable 
          students={students} 
          grades={grades}
          setGrades={setGrades}
        />
        <button
          onClick={handleSave}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {mutation.isLoading ? 'Enregistrement...' : 'Enregistrer les notes'}
        </button>
      </main>
    </div>
  );
}