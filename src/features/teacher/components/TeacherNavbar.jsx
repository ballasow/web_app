import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/slices/userSlice';
import { FiLogOut } from 'react-icons/fi';

export default function TeacherNavbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };

    const getNavLinkClass = ({ isActive }) => 
        isActive 
            ? 'bg-blue-700 px-3 py-2 rounded-md text-sm font-medium' 
            : 'hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';

    return (
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/teacher/dashboard" className="text-xl font-bold">Espace Enseignant</Link>
                <div className="flex space-x-4">
                    <NavLink to="/teacher/dashboard" end className={getNavLinkClass}>Dashboard</NavLink>
                    <NavLink to="/teacher/courses" className={getNavLinkClass}>Mes Cours</NavLink>
                    <NavLink to="/teacher/grades" className={getNavLinkClass}>Notes</NavLink>
                </div>
                <button 
                    onClick={handleLogout} 
                    className="flex items-center bg-red-500 hover:bg-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    aria-label="Se déconnecter"
                >
                    <FiLogOut className="mr-2" />
                    <span>Déconnexion</span>
                </button>
            </div>
        </nav>
    );
}