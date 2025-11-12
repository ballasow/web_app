// Composant : Payment
// Rôle : Gère l'affichage de l'état des paiements et permet d'effectuer un paiement.
import { useState } from "react";
import { useSelector } from 'react-redux';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PaymentStatus from "@/components/common/PaymentStatus.jsx";
import PrimaryButton from "@/components/common/PrimaryButton.jsx";
import { Link } from "react-router-dom";
import { getPayments, createPayment } from '@/api/payments';
import Notification from '@/components/common/Notification.jsx';
import toast from 'react-hot-toast';

export default function Payment() {
  const [notifications] = useState([
    { id: 1, text: "Votre paiement a été validé." },
  ]);
  const { userInfo } = useSelector(state => state.userReducer);
  const userId = userInfo?.id || userInfo?.userId || userInfo?.uid || null;
  const [amount, setAmount] = useState(0);
  const qc = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['payments', userId],
    queryFn: async () => {
      if (!userId) return { payments: [] };
      return await getPayments(userId);
    },
    enabled: !!userId,
  });

  const payments = data?.payments || [];

  const [notification, setNotification] = useState(null);

  const mutation = useMutation({
    mutationFn: createPayment,
    onSuccess: () => {
      qc.invalidateQueries(['payments', userId]);
      setAmount(0);
      setNotification({ message: 'Paiement créé (simulation)', type: 'success' });
      // auto-hide
      setTimeout(() => setNotification(null), 3500);
    },
    onError: (err) => {
      console.error(err);
      setNotification({ message: err?.message || 'Erreur lors du paiement', type: 'error' });
      setTimeout(() => setNotification(null), 5000);
    }
  });
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar navigation */}
      <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col p-6">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-700">Menu étudiant</h2>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/student/dashboard" className="hover:text-blue-700">
            Tableau de bord
          </Link>
          <Link to="/student/courses" className="hover:text-blue-700">
            Mes cours
          </Link>
          <Link to="/student/grades" className="hover:text-blue-700">
            Mes notes
          </Link>
          <Link to="/student/schedule" className="hover:text-blue-700">
            Emploi du temps
          </Link>
          <Link to="/student/payment" className="hover:text-blue-700 font-semibold">
            Paiement
          </Link>
          <Link to="/student/reclamations" className="hover:text-blue-700">
            Réclamations
          </Link>
        </nav>
        <div className="mt-10">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <ul className="space-y-1 text-sm">
            {notifications.map((n) => (
              <li key={n.id} className="text-gray-600">
                {n.text}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Paiement</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => toast('Téléchargement du reçu de paiement...')}
          >
            Télécharger mon reçu
          </button>
        </div>
        <div>
          {isLoading ? (
            <div>Chargement des paiements...</div>
          ) : (
            <div className="space-y-3">
              {payments.length === 0 ? (
                <div className="text-gray-600">Aucun paiement trouvé.</div>
              ) : (
                payments.map(p => (
                  <div key={p.id || p._id || Math.random()} className="bg-white p-4 rounded shadow flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{p.title || 'Paiement'}</div>
                      <div className="text-sm text-gray-600">Montant: {p.amount || p.montant} | Statut: {p.status || 'unknown'}</div>
                    </div>
                    <PaymentStatus status={p.status === 'paid' ? 'paid' : 'pending'} />
                  </div>
                ))
              )}
            </div>
          )}

          <div className="mt-6 bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Effectuer un paiement (simulation)</h3>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                className="border p-2 rounded w-40"
                value={amount}
                onChange={e => setAmount(Number(e.target.value))}
                placeholder="Montant"
              />
              <PrimaryButton onClick={() => {
                if (mutation.isLoading) return; // éviter double envoi
                if (!userId) return setNotification({ message: 'Utilisateur non identifié', type: 'error' });
                if (!amount || amount <= 0) return setNotification({ message: 'Montant invalide', type: 'error' });
                mutation.mutate({ userId, amount, title: 'Paiement étudiant', status: 'pending' });
              }} className={mutation.isLoading ? 'opacity-60 cursor-not-allowed' : ''}>
                {mutation.isLoading ? 'Traitement...' : `Payer ${amount > 0 ? `${amount} FCFA` : ''}`}
              </PrimaryButton>
            </div>
          </div>
        </div>
        {notification && <div className="mt-4"><Notification message={notification.message} type={notification.type} /></div>}
      </main>
    </div>
  );
}
