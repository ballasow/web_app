import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '@/redux/slices/userSlice';
import logo from '@/assets/logo.jpg';
import { toast } from 'react-hot-toast';
import { FiLogIn, FiUserPlus, FiGrid, FiLogOut } from 'react-icons/fi';

function Header() {
    const { userInfo, token } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        toast.success('Vous avez été déconnecté avec succès.');
        navigate('/login');
    };

    const getDashboardLink = () => {
        if (!userInfo) return '/login';
        switch (userInfo.role) {
            case 'admin':
                return '/admin/dashboard';
            case 'teacher':
                return '/teacher/dashboard';
            case 'student':
                return '/student/dashboard';
            default:
                return '/login';
        }
    };

    return (
        <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50 py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img src={logo} alt="TechnoLab Logo" className="h-10 w-auto bg-white rounded-full p-1"/>
                            <span className="ml-3 text-2xl font-bold">TechnoLab</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex md:items-center md:space-x-8 ml-10">
                        <Link to="/" className="font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out">Accueil</Link>
                        <Link to="/programmes" className="font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out">Programmes</Link>
                        <Link to="/admissions" className="font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out">Admissions</Link>
                        <Link to="/about" className="font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out">À Propos</Link>
                        <Link to="/contact" className="font-medium text-gray-300 hover:text-white transition duration-150 ease-in-out">Contact</Link>
                    </nav>
                    <div className="flex items-center">
                        {token && userInfo ? (
                            <div className="flex items-center space-x-4">
                                <Link to={getDashboardLink()} className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition duration-150 ease-in-out">
                                    <FiGrid className="mr-2" />
                                    Tableau de bord
                                </Link>
                                <button onClick={handleLogout} className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500 transition duration-150 ease-in-out">
                                    <FiLogOut className="mr-2" />
                                    Déconnexion
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-150 ease-in-out">
                                    <FiLogIn className="mr-2" />
                                    Connexion
                                </Link>
                                <Link to="/register" className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition duration-150 ease-in-out">
                                    <FiUserPlus className="mr-2" />
                                    Inscription
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

