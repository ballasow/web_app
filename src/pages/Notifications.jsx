import { useState } from "react";

export default function Notifications() {
  const [notifications] = useState([
    { id: 1, text: "Votre paiement a été validé." },
    { id: 2, text: "Nouvelle note ajoutée en Mathématiques." },
    { id: 3, text: "Un message de l'administration est disponible." },
  ]);
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Mes notifications</h1>
      <ul className="space-y-4">
        {notifications.map(n => (
          <li key={n.id} className="bg-white rounded shadow p-4 text-gray-700">{n.text}</li>
        ))}
      </ul>
    </div>
  );
}
