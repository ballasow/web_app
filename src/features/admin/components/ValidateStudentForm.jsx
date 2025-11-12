import { useState } from "react";

export default function ValidateStudentForm({ onClose }) {
  const [form, setForm] = useState({ nom: "", email: "", dossier: "" });
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Valider une inscription étudiant</h2>
        <label className="block mb-2 font-semibold">Nom</label>
        <input type="text" className="w-full border rounded px-3 py-2 mb-4" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} />
        <label className="block mb-2 font-semibold">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2 mb-4" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        <label className="block mb-2 font-semibold">Numéro dossier</label>
        <input type="text" className="w-full border rounded px-3 py-2 mb-4" value={form.dossier} onChange={e => setForm(f => ({ ...f, dossier: e.target.value }))} />
        <div className="flex gap-2 mt-4">
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Valider</button>
          <button type="button" className="bg-gray-200 text-green-800 px-4 py-2 rounded hover:bg-green-100" onClick={onClose}>Annuler</button>
        </div>
      </form>
    </div>
  );
}
