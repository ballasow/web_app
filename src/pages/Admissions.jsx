
import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Quels sont les prérequis pour s'inscrire ?", a: "Aucun prérequis, la motivation suffit !" },
  { q: "Quels moyens de paiement acceptez-vous ?", a: "Orange Money, Wave, carte bancaire, paiement échelonné." },
  { q: "Quand commence la prochaine session ?", a: "La rentrée a lieu chaque trimestre. Contactez-nous pour les dates précises." },
];

export default function Admissions() {
  const [open, setOpen] = useState(null);
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Admissions</h1>
      <p className="mb-4">
        Les inscriptions sont ouvertes pour la prochaine rentrée ! Que vous soyez débutant ou confirmé,
        rejoignez une formation adaptée à vos ambitions.
      </p>
      <p className="mb-6">
        Modalités de paiement : Orange Money, Wave, Carte bancaire, Paiement échelonné.
      </p>
      <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 mb-8 inline-block">
        S’inscrire maintenant
      </Link>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">FAQ Admissions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded p-4 bg-white">
              <button className="w-full text-left font-semibold text-blue-700" onClick={() => setOpen(open === i ? null : i)}>
                {faq.q}
              </button>
              {open === i && <p className="mt-2 text-gray-700">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
