import { Link } from 'react-router-dom'

function MainContent() {
    return <div>
        {/* Section principale */}
      <main className="flex flex-wrap justify-center items-center gap-10 px-6 py-12 bg-gray-200">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Bienvenue à Techno-Lab Ista !</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Restez informé, suivez votre progression et communiquez
            facilement avec votre établissement.
          </p>
        </div>
        <div className="max-w-xl">
          <img src="assets/eleve.avif" alt="Techno-Lab ISTA Publicité" className="rounded-lg shadow-lg w-full" />
        </div>
      </main>

      {/* Section Aperçus Rapides */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-12 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1">
          <div className="text-3xl text-blue-600 mb-4">📅</div>
          <h3 className="text-xl font-semibold mb-2">Prochains Événements</h3>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>Devoir de mathématiques: 20/05</li>
            <li>Réunion parents-professeurs: 25/05</li>
            <li>Examen de français: 30/05</li>
          </ul>
          <a href="#calendrier" className="text-blue-600 hover:underline">Voir le calendrier complet</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1">
          <div className="text-3xl text-blue-600 mb-4">🔔</div>
          <h3 className="text-xl font-semibold mb-2">Dernières Notifications</h3>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>Nouvelle note en histoire publiée.</li>
            <li>Rappel: Paiement des frais de scolarité.</li>
            <li>Changement d'horaire pour le cours de physique.</li>
          </ul>
          <a href="#notifications" className="text-blue-600 hover:underline">Voir toutes les notifications</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1">
          <div className="text-3xl text-blue-600 mb-4">🎓</div>
          <h3 className="text-xl font-semibold mb-2">Progression Récente</h3>
          <p className="text-sm text-gray-600 mb-4">
            Moyenne générale: <span className="text-green-600 font-bold text-lg">14.5/20</span>
          </p>
          <a href="#notes-detaillees" className="text-blue-600 hover:underline">Voir mes notes détaillées</a>
        </div>
      </section>

    </div>
}

export default MainContent;