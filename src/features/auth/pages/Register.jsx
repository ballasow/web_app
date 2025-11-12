
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { siginAPI } from "../../../api/auth";
import { setUserInfo } from '@/redux/slices/userSlice';

import logo from "../../../assets/logo.jpg";

function Register() {
    let [user, setUser] = useState({
        firstname: '',
        lastname: '',
        filiere: '',
        quartier: '',
        tell: '',
        mail: '',
        passW: '',
        date_Naissance: '',
    });
    const [photo, setPhoto] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function onFormSubmit(event) {
        event.preventDefault();
        let response = null;
        let formData = new FormData();
        Object.entries(user).forEach(([key, value]) => {
            formData.append(key, value);
        });
        if (photo) {
            formData.append('photo', photo);
        }
        try {
            response = await siginAPI(formData);
            if (response && response.success) {
                // Persist token
                if (response.token) localStorage.setItem('token', response.token);
                // Build a user payload (prefer API's user object if provided)
                const userPayload = response.user ? response.user : { role: response.role || 'student', name: response.name || '' };
                localStorage.setItem('userInfo', JSON.stringify(userPayload));
                if (userPayload.role) localStorage.setItem('role', userPayload.role);

                // Update redux state so Header/ProtectedRoute react immediately
                dispatch(setUserInfo(userPayload));

                toast.success(response.message || 'Inscription réussie');
                // Navigate client-side without full reload
                navigate(`/${userPayload.role || 'student'}/dashboard`);
            } else {
                toast.error(response?.message || 'Erreur lors de l\'inscription');
            }
        } catch (error) {
            toast.error(error.message || 'Erreur réseau');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-8">
            <div className="flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-md">
                <div className="flex flex-col justify-center p-8">
                    <div className="flex justify-center mb-4">
                        <img src={logo} alt="Logo" className="h-16 w-16 rounded-full shadow" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Inscription</h2>
                    <form onSubmit={onFormSubmit} className="space-y-4">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Prénom"
                                value={user.firstname}
                                onChange={e => setUser({ ...user, firstname: e.target.value })}
                                className="w-1/2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Nom"
                                value={user.lastname}
                                onChange={e => setUser({ ...user, lastname: e.target.value })}
                                className="w-1/2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Filière"
                            value={user.filiere}
                            onChange={e => setUser({ ...user, filiere: e.target.value })}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Quartier de résidence"
                            value={user.quartier}
                            onChange={e => setUser({ ...user, quartier: e.target.value })}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Numéro de téléphone"
                            value={user.tell}
                            onChange={e => setUser({ ...user, tell: e.target.value })}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Adresse e-mail"
                            value={user.mail}
                            onChange={e => setUser({ ...user, mail: e.target.value })}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            value={user.passW}
                            onChange={e => setUser({ ...user, passW: e.target.value })}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        <input
                            type="date"
                            placeholder="Date de naissance"
                            value={user.date_Naissance}
                            onChange={e => setUser({ ...user, date_Naissance: e.target.value })}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                            required
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={e => setPhoto(e.target.files[0])}
                            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg shadow hover:bg-blue-800 transition">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register