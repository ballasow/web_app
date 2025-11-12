// src/components/ReclamationForm.jsx
import { useState } from "react";

export default function ReclamationForm({ onSubmit }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Écrivez votre réclamation ici..."
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Envoyer
      </button>
    </form>
  );
}
