// Composant : About
// Rôle : Affiche des informations sur TechnoLab, sa vision et son équipe.
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">À propos de TechnoLab</h1>
      <p className="mb-4">
        TechnoLab University est une école numérique innovante destinée à transformer l'éducation en Afrique.
        Fondée par des experts du numérique et de l’enseignement, notre mission est de fournir une formation
        pratique, accessible et de qualité.
      </p>
      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Notre vision</h2>
          <p>
            Offrir à chaque jeune africain l’opportunité de se former aux métiers d’avenir, avec un accompagnement humain et technologique.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Chiffres clés</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>+1000 étudiants formés</li>
            <li>+30 formateurs experts</li>
            <li>95% de taux de satisfaction</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">L’équipe fondatrice</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded shadow p-4">
            <h3 className="font-bold">Awa Diop</h3>
            <p className="text-gray-600">Directrice pédagogique</p>
          </div>
          <div className="bg-white rounded shadow p-4">
            <h3 className="font-bold">Moussa Koné</h3>
            <p className="text-gray-600">Responsable technique</p>
          </div>
        </div>
      </div>
    </div>
  );
}
