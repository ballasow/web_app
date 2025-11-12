import { useState } from "react";

export default function AddTeacherForm({ onClose }) {
  const [form, setForm] = useState({ nom: "", email: "", identifiant: "" });
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Ajouter un enseignant</h2>
        <label className="block mb-2 font-semibold">Nom</label>
        <input type="text" className="w-full border rounded px-3 py-2 mb-4" value={form.nom} onChange={e => setForm(f => ({ ...f, nom: e.target.value }))} />
        <label className="block mb-2 font-semibold">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2 mb-4" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        <label className="block mb-2 font-semibold">Identifiant</label>
        <input type="text" className="w-full border rounded px-3 py-2 mb-4" value={form.identifiant} onChange={e => setForm(f => ({ ...f, identifiant: e.target.value }))} />
        <div className="flex gap-2 mt-4">
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Ajouter</button>
          <button type="button" className="bg-gray-200 text-blue-800 px-4 py-2 rounded hover:bg-blue-100" onClick={onClose}>Annuler</button>
        </div>
      </form>
    </div>
  );
}
