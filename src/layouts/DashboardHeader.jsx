import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/slices/userSlice';
import { FiLogOut } from 'react-icons/fi';

export default function DashboardHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };

    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Bienvenue, {userInfo?.name || 'Utilisateur'} 👋
                </h1>
                <p className="text-gray-500">
                    Vous êtes connecté en tant que <strong>{userInfo?.role}</strong>.
                </p>
            </div>
            <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors duration-200"
                aria-label="Se déconnecter"
            >
                <FiLogOut className="mr-2" />
                <span>Déconnexion</span>
            </button>
        </div>
    );
}
