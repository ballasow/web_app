// Composant : Grades
// Rôle : Affiche les notes d'un étudiant.
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import NoteViewer from '../../../components/common/NoteViewer';
import { useQuery } from '@tanstack/react-query';
import { getGradesForStudent } from '@/api/grades';

export default function Grades() {
  const { userInfo } = useSelector(state => state.userReducer);
  const userId = userInfo?.id || userInfo?.userId || userInfo?.uid || null;

  const { data, isLoading } = useQuery({
    queryKey: ['grades', userId],
    queryFn: async () => {
      if (!userId) return { grades: [] };
      return await getGradesForStudent(userId);
    },
    enabled: !!userId,
  });

  const notes = data?.grades || [];

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
          <Link to="/student/grades" className="hover:text-blue-700 font-semibold">Mes notes</Link>
          <Link to="/student/schedule" className="hover:text-blue-700">Emploi du temps</Link>
          <Link to="/student/payment" className="hover:text-blue-700">Paiement</Link>
          <Link to="/student/reclamations" className="hover:text-blue-700">Réclamations</Link>
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Mes notes</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => toast('Téléchargement du relevé de notes...')}
          >
            Télécharger mes notes
          </button>
        </div>
        <NoteViewer notes={notes} isLoading={isLoading} />
      </main>
    </div>
  );
}
