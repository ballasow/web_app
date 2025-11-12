import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({ password: "", confirm: "" });
  const [success, setSuccess] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    if (form.password && form.password === form.confirm) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Paramètres du compte</h1>
      <form className="bg-white rounded shadow p-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">Nouveau mot de passe</label>
          <input
            type="password"
            name="password"
            className="w-full border px-4 py-2 rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirm"
            className="w-full border px-4 py-2 rounded"
            value={form.confirm}
            onChange={handleChange}
            required
          />
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enregistrer</button>
        {success && <div className="text-green-600 font-semibold mt-2">Mot de passe modifié !</div>}
      </form>
    </div>
  );
}
