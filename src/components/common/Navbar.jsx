// Composant : Navbar
// Rôle : Barre de navigation principale du site, affichée sur les pages publiques.
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield, FaSignInAlt, FaBook, FaHome, FaInfoCircle, FaEnvelope, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le dropdown si clic en dehors
  function handleClickOutside(e) {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdown(false);
    }
  }
  useEffect(() => {
    if (dropdown) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdown]);

  return (
    <nav className="backdrop-blur bg-white/80 shadow-lg rounded-b-2xl sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow border-2 border-blue-200 group-hover:scale-105 transition" />
          <span className="text-2xl font-extrabold text-blue-800 tracking-tight group-hover:text-blue-600 transition">TechnoLab</span>
        </Link>
        {/* Menu desktop */}
        <div className="hidden md:flex gap-2 items-center">
          <Link to="/" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center"><FaHome className="inline mr-1 mb-1"/>Accueil</Link>
          <Link to="/programmes" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center"><FaBook className="inline mr-1 mb-1"/>Programmes</Link>
          <Link to="/admissions" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center">Admissions</Link>
          <Link to="/contact" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center"><FaEnvelope className="inline mr-1 mb-1"/>Contact</Link>
          <Link to="/about" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center"><FaInfoCircle className="inline mr-1 mb-1"/>À propos</Link>
          {/* Menu déroulant */}
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setDropdown(d => !d)} className="flex items-center gap-1 px-3 py-2 rounded hover:bg-blue-50 text-gray-700 font-medium focus:outline-none transition">
              Espace <FaChevronDown className={`ml-1 transition-transform ${dropdown ? 'rotate-180' : ''}`}/>
            </button>
            {dropdown && (
              <div className="absolute right-0 mt-2 w-52 bg-white border border-blue-200 rounded-xl shadow-xl flex flex-col z-30 animate-fade-in overflow-hidden">
                <Link to="/student/dashboard" className="px-4 py-2 text-gray-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setDropdown(false)}><FaUserGraduate className="inline mr-2"/>Espace étudiant</Link>
                <Link to="/teacher/dashboard" className="px-4 py-2 text-gray-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setDropdown(false)}><FaChalkboardTeacher className="inline mr-2"/>Espace enseignant</Link>
                <Link to="/admin/dashboard" className="px-4 py-2 text-gray-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setDropdown(false)}><FaUserShield className="inline mr-2"/>Admin</Link>
              </div>
            )}
          </div>
          <Link to="/login" className="ml-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg shadow hover:from-blue-800 hover:to-blue-600 font-semibold transition flex items-center"><FaSignInAlt className="mr-2"/>Se connecter</Link>
        </div>
        {/* Burger menu mobile */}
        <button className="md:hidden flex items-center px-3 py-2 border rounded text-blue-700 border-blue-700 hover:bg-blue-100 focus:outline-none" onClick={() => setOpen(o => !o)} aria-label="Ouvrir le menu mobile">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Menu mobile */}
      {open && (
        <div className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-white/95 shadow animate-fade-in rounded-b-2xl">
          <Link to="/" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}><FaHome className="inline mr-1 mb-1"/>Accueil</Link>
          <Link to="/programmes" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}><FaBook className="inline mr-1 mb-1"/>Programmes</Link>
          <Link to="/admissions" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}>Admissions</Link>
          <Link to="/contact" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}><FaEnvelope className="inline mr-1 mb-1"/>Contact</Link>
          <Link to="/about" className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}><FaInfoCircle className="inline mr-1 mb-1"/>À propos</Link>
          {/* Menu déroulant mobile */}
          <details className="py-2">
            <summary className="cursor-pointer text-gray-700 hover:text-blue-700 font-medium select-none flex items-center">Espace <FaChevronDown className="ml-1"/></summary>
            <div className="flex flex-col pl-4 mt-2">
              <Link to="/student/dashboard" className="px-4 py-2 text-gray-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}><FaUserGraduate className="inline mr-2"/>Espace étudiant</Link>
              <Link to="/teacher/dashboard" className="px-4 py-2 text-gray-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}><FaChalkboardTeacher className="inline mr-2"/>Espace enseignant</Link>
              <Link to="/admin/dashboard" className="px-4 py-2 text-gray-700 hover:bg-blue-50 transition flex items-center" onClick={()=>setOpen(false)}><FaUserShield className="inline mr-2"/>Admin</Link>
            </div>
          </details>
          <Link to="/login" className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg shadow hover:from-blue-800 hover:to-blue-600 font-semibold transition flex items-center justify-center" onClick={()=>setOpen(false)}><FaSignInAlt className="mr-2"/>Se connecter</Link>
        </div>
      )}
    </nav>
  );
}
