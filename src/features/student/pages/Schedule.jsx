// Composant : Schedule
// Rôle : Affiche l'emploi du temps d'un étudiant.
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { getScheduleForStudent } from '@/api/schedule';

export default function Schedule() {
  const { userInfo } = useSelector(state => state.userReducer);
  const userId = userInfo?.id || userInfo?.userId || userInfo?.uid || null;

  const { data, isLoading } = useQuery({
    queryKey: ['schedule', userId],
    queryFn: async () => {
      if (!userId) return { schedule: [] };
      return await getScheduleForStudent(userId);
    },
    enabled: !!userId,
  });

  const schedule = data?.schedule || [];

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
          <Link to="/student/schedule" className="hover:text-blue-700 font-semibold">Emploi du temps</Link>
          <Link to="/student/payment" className="hover:text-blue-700">Paiement</Link>
          <Link to="/student/reclamations" className="hover:text-blue-700">Réclamations</Link>
        </nav>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Mon emploi du temps</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => toast('Téléchargement de mon emploi du temps...')}
          >
            Télécharger mon emploi du temps
          </button>
        </div>
        {isLoading ? (
          <div>Chargement...</div>
        ) : (
          <div className="space-y-4">
            {schedule.map(d => (
              <div key={d.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold">{d.title}</h3>
                <p className="text-sm text-gray-600">{d.time} — {d.room}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
