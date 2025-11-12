import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { get_User_Information } from '@/api/accueil';
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "@/redux/slices/userSlice";
import Loader from "@/components/common/loader.jsx";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { userInfo } = useSelector(state => state.userReducer);
    const [checking, setChecking] = useState(true);
    const [redirectTo, setRedirectTo] = useState(null);

    useEffect(() => {
        const verifyAuth = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Veuillez vous connecter pour accéder à cette page.');
                // Passer la page d'origine pour rediriger après login
                setRedirectTo({ pathname: '/login', state: { from: location.pathname } });
                setChecking(false);
                return;
            }

            if (userInfo) {
                if (allowedRoles && !allowedRoles.includes(userInfo.role)) {
                    toast.error("Vous n'êtes pas autorisé à voir cette page.");
                    setRedirectTo(`/${userInfo.role}/dashboard`);
                }
                setChecking(false);
                return;
            }

            try {
                const response = await get_User_Information();
                if (response && response.success) {
                    const user = response.user;
                    dispatch(setUserInfo(user));
                    localStorage.setItem('likesTab', JSON.stringify(user.liked || []));
                    localStorage.setItem('dislikesTab', JSON.stringify(user.disliked || []));

                    if (allowedRoles && !allowedRoles.includes(user.role)) {
                        toast.error("Vous n'êtes pas autorisé à voir cette page.");
                        setRedirectTo(`/${user.role}/dashboard`);
                    }
                    setChecking(false);
                } else {
                    toast.error(response.message || 'Session invalide. Veuillez vous reconnecter.');
                    localStorage.removeItem('token');
                    setRedirectTo({ pathname: '/login', state: { from: location.pathname } });
                    setChecking(false);
                }
            } catch (error) {
                console.error("Erreur de vérification d'authentification:", error);
                toast.error('Une erreur est survenue. Veuillez vous reconnecter.');
                localStorage.removeItem('token');
                setRedirectTo('/login');
                setChecking(false);
            }
        };

        verifyAuth();
    }, [userInfo, allowedRoles, dispatch, location.pathname]);

    if (checking) return <Loader />;

    if (redirectTo) {
        // redirectTo peut être un objet { pathname, state }
        if (typeof redirectTo === 'string') return <Navigate to={redirectTo} replace />;
        return <Navigate to={redirectTo.pathname} state={redirectTo.state} replace />;
    }

    if (!userInfo) return <Navigate to="/login" replace />;

    if (allowedRoles && !allowedRoles.includes(userInfo.role)) {
        return <Navigate to={`/${userInfo.role}/dashboard`} replace />;
    }

    return children;
};

export default ProtectedRoute;
