import { useState } from "react";

export default function GenerateTeacherIdForm({ onClose }) {
  const [email, setEmail] = useState("");
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Générer identifiant enseignant</h2>
        <label className="block mb-2 font-semibold">Email de l'enseignant</label>
        <input type="email" className="w-full border rounded px-3 py-2 mb-4" value={email} onChange={e => setEmail(e.target.value)} />
        <div className="flex gap-2 mt-4">
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800">Générer</button>
          <button type="button" className="bg-gray-200 text-purple-800 px-4 py-2 rounded hover:bg-purple-100" onClick={onClose}>Annuler</button>
        </div>
      </form>
    </div>
  );
}
