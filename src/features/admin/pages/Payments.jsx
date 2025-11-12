import { useState } from "react";

export default function AdminPayments() {
  const [payments] = useState([
    { id: 1, student: "Balla Sow", amount: "50 000 FCFA", status: "Validé" },
    { id: 2, student: "Aminata Diallo", amount: "50 000 FCFA", status: "En attente" },
  ]);
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Gestion des paiements</h1>
      <table className="w-full text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Étudiant</th>
            <th className="p-2 border">Montant</th>
            <th className="p-2 border">Statut</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(p => (
            <tr key={p.id} className="border-t">
              <td className="p-2 border">{p.student}</td>
              <td className="p-2 border">{p.amount}</td>
              <td className="p-2 border">{p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
