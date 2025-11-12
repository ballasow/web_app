// Composant : Home
// Rôle : Page d'accueil principale du site, présentant l'école et les accès aux différents espaces.
import { Link } from 'react-router-dom';
import hero from "../assets/hero.jpg.jpeg";
import { FaLaptopCode, FaCogs, FaChartBar, FaUniversity, FaArrowDown } from "react-icons/fa";
import { useRef } from 'react';

const Home = () => {
  const programmeRef = useRef(null);

  const scrollToProgrammes = () => {
    if (programmeRef.current) {
      programmeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Le menu global est géré par MainLayout/Navbar */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left relative bg-gradient-to-br from-blue-100 to-blue-50 py-12 md:py-0 md:h-[60vh] mt-20 md:mt-24">
        <div className="md:w-1/2 flex flex-col items-center md:items-start px-8 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900 animate-fade-in-down-long drop-shadow-lg">Bienvenue à <span className="text-blue-700">TechnoLab-ISTA</span></h1>
          <p className="text-lg md:text-2xl mb-2 text-blue-700 animate-fade-in-up-long delay-200 font-medium drop-shadow">
            Plateforme d’éducation numérique innovante pour l’Afrique de demain.
          </p>
          <span className="mb-6 text-base md:text-lg text-blue-500 animate-fade-in-up-long delay-400">Osez l’excellence, osez l’avenir !</span>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto opacity-0 animate-fade-in-up delay-300">
            <Link to="/register" className="bg-blue-700 px-6 py-3 rounded text-white font-semibold hover:bg-blue-800 transition">Inscription</Link>
            <Link to="/login" className="border border-blue-700 px-6 py-3 rounded text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition">Connexion</Link>
          </div>
          <button onClick={scrollToProgrammes} className="mt-8 flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition focus:outline-none opacity-0 animate-fade-in-up delay-500" aria-label="Découvrir nos programmes">
            Découvrir nos programmes <FaArrowDown className="animate-bounce" />
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center p-8">
          <img src={hero} alt="Hero" className="w-full max-w-md h-auto rounded-2xl shadow-xl opacity-0 animate-fade-in" loading="lazy" />
        </div>
      </section>

      <section ref={programmeRef} className="py-14 px-4 max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-900 tracking-tight drop-shadow animate-fade-in-down">Grands domaines de formation</h2>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full opacity-70 animate-pulse" aria-hidden="true"></div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Link to="/programmes" className="group p-8 border-2 border-blue-100 rounded-3xl shadow-lg bg-white flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-400 focus:outline-none relative overflow-hidden animate-fade-in-up delay-100">
            <span className="absolute -top-8 -right-8 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition"></span>
            <FaLaptopCode className="text-5xl text-blue-600 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" aria-label="Icône Informatique" />
            <h3 className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-blue-900 transition">Informatique & Data</h3>
            <p className="text-center text-gray-700">Développement, réseaux, data science, cybersécurité…</p>
          </Link>
          <Link to="/programmes" className="group p-8 border-2 border-green-100 rounded-3xl shadow-lg bg-white flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-green-400 focus:outline-none relative overflow-hidden animate-fade-in-up delay-200">
            <span className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-50 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition"></span>
            <FaCogs className="text-5xl text-green-600 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" aria-label="Icône Ingénierie" />
            <h3 className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-green-800 transition">Ingénierie & Sciences</h3>
            <p className="text-center text-gray-700">Génie civil, électronique, énergies, agroalimentaire…</p>
          </Link>
          <Link to="/programmes" className="group p-8 border-2 border-yellow-100 rounded-3xl shadow-lg bg-white flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 focus:outline-none relative overflow-hidden animate-fade-in-up delay-250">
            <span className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-50 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition"></span>
            <FaChartBar className="text-5xl text-yellow-500 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" aria-label="Icône Gestion" />
            <h3 className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-yellow-700 transition">Gestion & Management</h3>
            <p className="text-center text-gray-700">Comptabilité, finance, RH, marketing, logistique…</p>
          </Link>
          <Link to="/programmes" className="group p-8 border-2 border-purple-100 rounded-3xl shadow-lg bg-white flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-400 focus:outline-none relative overflow-hidden animate-fade-in-up delay-300">
            <span className="absolute -top-8 -left-8 w-24 h-24 bg-purple-50 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition"></span>
            <FaUniversity className="text-5xl text-purple-600 mb-4 drop-shadow-lg group-hover:scale-110 transition-transform" aria-label="Icône Université" />
            <h3 className="text-2xl font-bold mb-2 text-blue-700 group-hover:text-purple-700 transition">Sciences sociales & Communication</h3>
            <p className="text-center text-gray-700">Communication, documentation, sciences humaines…</p>
          </Link>
        </ul>
      </section>
    </div>
  );
};

export default Home;