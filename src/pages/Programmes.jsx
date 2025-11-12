// Composant : Programmes
// Rôle : Affiche la liste des programmes universitaires, les conditions d'admission et les frais de scolarité.
import React from "react";
import { FaLaptopCode, FaLightbulb, FaUsers, FaCogs, FaChartBar, FaNetworkWired, FaUniversity } from "react-icons/fa";

const Programmes = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">Programmes universitaires & admissions</h1>

      {/* LICENCE */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2"><FaUniversity /> Licences (Bac +3)</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Domaines tertiaires</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Gestion Logistique et Transport</li>
            <li>Finances / Gestion ou Finance-Banque-Assurance</li>
            <li>Sciences et Techniques Comptables et Financières
              <ul className="list-disc ml-6">
                <li>Comptabilité, Contrôle et Audit</li>
                <li>Gestion comptable et financière</li>
              </ul>
            </li>
            <li>Gestion des Entreprises et des Administrations
              <ul className="list-disc ml-6">
                <li>Gestion des Ressources Humaines (GRH)</li>
                <li>Gestion des entreprises et Administrations</li>
                <li>Communication d’entreprise et des organisations</li>
                <li>Logistique Humanitaire</li>
              </ul>
            </li>
            <li>Archivage électronique et Informatique documentaire</li>
            <li>Marketing-Communication / Marketing & Commerce International</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Domaines techniques</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Licence en Data Science</li>
            <li>Licence en Systèmes et Réseaux informatiques</li>
            <li>Licence en Statistiques et Analyse des données</li>
            <li>Licence informatique, Génie logiciel et Technologies Web</li>
            <li>Licence en Méthodes Informatiques Appliquées à la Gestion (MIAGE)</li>
            <li>Ingénierie Génie électrique et Energies renouvelables</li>
            <li>Ingénierie Electronique & télécommunications
              <ul className="list-disc ml-6">
                <li>Réseaux & Télécommunication</li>
                <li>Electronique, Maintenance et Systèmes de Production</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Sciences de l’Ingénieur (Nouveau)</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Génie civil : BTP</li>
            <li>Géologie / Mines</li>
            <li>Technologies Agro-alimentaires</li>
          </ul>
        </div>
        <div className="text-sm text-gray-500 mb-4">Possibilité de double diplomation (PPA Paris, UVCI Côte d’Ivoire), certifications CISCO, etc.</div>
      </section>

      {/* CONDITIONS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Conditions d’admission</h2>
        <ul className="list-decimal list-inside ml-4 text-gray-700 mb-2">
          <li>Être titulaire du diplôme requis ou équivalent, ou expérience pertinente</li>
          <li>Compléter le dossier d’inscription</li>
        </ul>
        <div className="font-semibold text-blue-700 mb-2">Documents à fournir :</div>
        <ul className="list-disc list-inside ml-6 text-gray-700">
          <li>Demande manuscrite timbrée</li>
          <li>Copie d’extrait de naissance ou d’acte tenant lieu</li>
          <li>Copie certifiée conforme des diplômes/attestations obtenus et CV</li>
          <li>Deux photos d’identité récentes</li>
          <li>Fiche d’inscription dûment remplie</li>
        </ul>
        <div className="text-sm text-gray-500 mt-2">Admission conditionnelle possible, liste d’attente si places limitées, changement de programme sur dossier.</div>
      </section>

      {/* FRAIS DE SCOLARITÉ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Frais de scolarité</h2>
        <div className="mb-2 text-gray-700">Frais d’inscription : <span className="font-semibold">100 000 F</span> (obligatoires, non remboursables, à régler au départ).</div>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border text-sm">
            <thead className="bg-blue-100">
              <tr>
                <th className="border px-2 py-1">Cycle</th>
                <th className="border px-2 py-1">Année(s)</th>
                <th className="border px-2 py-1">Montant annuel (FCFA)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Licence (L1-L2)</td><td className="border px-2 py-1">2 ans</td><td className="border px-2 py-1">600 000 à 725 000</td></tr>
              <tr><td className="border px-2 py-1">Licence (L3)</td><td className="border px-2 py-1">1 an</td><td className="border px-2 py-1">750 000 à 950 000</td></tr>
              <tr><td className="border px-2 py-1">Master (M1-M2)</td><td className="border px-2 py-1">2 ans</td><td className="border px-2 py-1">900 000 à 1 500 000</td></tr>
            </tbody>
          </table>
        </div>
        <div className="text-sm text-gray-500">Modalités de paiement : paiement en 3 fois (début de chaque trimestre).</div>
      </section>

      {/* MASTERS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2"><FaCogs /> Masters (Bac +4/+5)</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Domaines tertiaires & gestion</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Comptabilité – Contrôle – Audit</li>
            <li>Gestion comptable, financière et Fiscalité</li>
            <li>Finance / Gestion, Finance - Banque - Assurance</li>
            <li>Logistique et Management des Opérations</li>
            <li>Gestion des Entreprises et des Administrations</li>
            <li>Marketing et Communication (digital, entreprises, organisations)</li>
            <li>Commerce International et Stratégies</li>
            <li>Management des Organisations (international, industries extractives)</li>
            <li>Management des Projets et des Organisations (Projets, Suivi & Evaluation)</li>
            <li>Gouvernance et Management public, Environnement et Développement durable, Régulation de Marchés publics</li>
            <li>Modélisation Economique et Financière</li>
            <li>Gestion de l’information et de la documentation (Gidoc)</li>
            <li>Gestion des Ressources Humaines & transformation digitale</li>
            <li>Ingénierie de la Formation et du Dispositif de compétences</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Domaines techniques & ingénierie</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>MIAGE / Informatique de Gestion</li>
            <li>Réseaux & Télécommunication</li>
            <li>Data Science et Modélisation Statistique</li>
            <li>Génie électrique et Energies Renouvelables</li>
            <li>Génie électronique et Systèmes embarqués</li>
            <li>Ingénierie de la BlockChain et CyberSécurité</li>
            <li>Informatique, Génie Logiciel et Technologies Web</li>
            <li>Electronique et Maintenance des Systèmes de Production</li>
            <li>Ingénierie des Systèmes, Réseaux informatiques et Sécurité</li>
            <li>Génie civil</li>
            <li>Géologie (exploration), Génie minier (exploitation minière)</li>
            <li>Technologies et agro-alimentaires</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Conditions d’admission</h3>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li>Être titulaire d’une Licence (Bac+3) ou Maîtrise/Master1 + 1 an d’études (après évaluation du dossier)</li>
            <li>Dossier complet (voir section conditions d’admission plus haut)</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Frais de scolarité</h3>
          <div className="overflow-x-auto mb-2">
            <table className="min-w-full border text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border px-2 py-1">Type de Master</th>
                  <th className="border px-2 py-1">Montant annuel (FCFA)</th>
                  <th className="border px-2 py-1">Montant (12 mois, Bac+4/5)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-2 py-1">Master tertiaire / gestion</td><td className="border px-2 py-1">900 000 à 1 050 000</td><td className="border px-2 py-1">1 500 000</td></tr>
                <tr><td className="border px-2 py-1">Master technique / ingénierie</td><td className="border px-2 py-1">1 100 000 à 1 200 000</td><td className="border px-2 py-1">1 500 000</td></tr>
              </tbody>
            </table>
          </div>
          <div className="text-sm text-gray-500">Modalités de paiement : paiement en 3 fois (début de chaque trimestre).<br/>En M2 (5e année), un supplément de 100 000 F est appliqué pour les filières techniques.</div>
        </div>
      </section>

      {/* OPPORTUNITÉS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Opportunités & plus</h2>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>Double diplomation possible (MBA ESG Paris, UVCI Côte d’Ivoire, Université Catholique du Sacré-Cœur Milan…)</li>
          <li>Certifications CISCO (CCNA, DevNet, Sécurité…)</li>
          <li>Diplômes accrédités CAMES</li>
          <li>Corps professoral expérimenté et international</li>
        </ul>
      </section>
    </div>
  );
};

export default Programmes;
