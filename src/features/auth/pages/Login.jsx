// Composant : Login
// Rôle : Gère la connexion des utilisateurs en utilisant Redux pour l'état global.
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '@/redux/slices/userSlice';
import toast from 'react-hot-toast';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import logo from "@/assets/logo.jpg";

function Login() {
    const [credentials, setCredentials] = useState({ mail: '', passW: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { isLoading, role } = useSelector((state) => state.userReducer);
    const location = useLocation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };
    
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!credentials.mail || !credentials.passW) {
            toast.error("Veuillez remplir tous les champs.");
            return;
        }
        
        const resultAction = await dispatch(loginUser(credentials));

        if (loginUser.fulfilled.match(resultAction)) {
            toast.success('Connexion réussie !');
            // La redirection est gérée dans le useEffect ci-dessous
        } else {
            if (resultAction.payload) {
                toast.error(`Erreur: ${resultAction.payload}`);
            } else {
                toast.error('Une erreur inconnue est survenue.');
            }
        }
    };

    // Redirige l'utilisateur si le rôle change et est valide (après une connexion réussie)
    useEffect(() => {
        if (role) {
            // If the user was redirected to login from a protected route, go back there
            const from = location.state?.from;
            if (from) {
                navigate(from);
                return;
            }

            switch (role) {
                case 'admin':
                    navigate('/admin/dashboard');
                    break;
                case 'teacher':
                    navigate('/teacher/dashboard');
                    break;
                case 'student':
                    navigate('/student/dashboard');
                    break;
                default:
                    navigate('/');
            }
        }
    }, [role, navigate, location]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-8">
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-4xl">
                
                {/* Formulaire à droite */}
                <div className="flex-1 flex flex-col justify-center p-8">
                    <div className="flex justify-center mb-4">
                        <img src={logo} alt="Logo" className="h-16 w-16 rounded-full shadow" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Connexion</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaEnvelope className="text-gray-400" />
                            </span>
                            <input
                                type="email"
                                name="mail"
                                placeholder="Adresse e-mail"
                                value={credentials.mail}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <FaLock className="text-gray-400" />
                            </span>
                            <input
                                type="password"
                                name="passW"
                                placeholder="Mot de passe"
                                value={credentials.passW}
                                onChange={handleInputChange}
                                className="w-full p-3 pl-10 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full flex justify-center items-center gap-2 bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-800 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Connexion en cours...' : (
                                <>
                                    <FaSignInAlt />
                                    Se connecter
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;