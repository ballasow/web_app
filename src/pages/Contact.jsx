
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          className="w-full border px-4 py-2 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          className="w-full border px-4 py-2 rounded"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Votre message..."
          className="w-full border px-4 py-2 rounded h-40"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Envoyer</button>
        {sent && <div className="text-green-600 font-semibold mt-2">Message envoyé !</div>}
      </form>
      <div className="mt-10 flex gap-6 items-center">
        <a href="mailto:contact@technolab.com" className="text-blue-700 hover:underline">contact@technolab.com</a>
        <a href="#" className="text-blue-700 hover:underline">Facebook</a>
        <a href="#" className="text-blue-700 hover:underline">WhatsApp</a>
      </div>
    </div>
  );
}
