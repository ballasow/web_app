import { useState, useEffect } from 'react';

const UserForm = ({ user, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Étudiant',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (user) {
            setFormData(user);
        } else {
            setFormData({ name: '', email: '', role: 'Étudiant' });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!formData.name || String(formData.name).trim().length < 2) errs.name = 'Nom invalide';
        // simple email regex
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!formData.email || !emailRegex.test(formData.email)) errs.email = 'Email invalide';
        // normalize role options to English keys used in backend (if any)
        const allowedRoles = ['Étudiant', 'Enseignant', 'Admin', 'student', 'teacher', 'admin'];
        if (!formData.role || !allowedRoles.includes(formData.role)) errs.role = 'Rôle invalide';

        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">{user ? 'Modifier' : 'Ajouter'} un utilisateur</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nom complet
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                            Rôle
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option>Étudiant</option>
                            <option>Enseignant</option>
                            <option>Admin</option>
                        </select>
                        {errors.role && <p className="text-red-600 text-sm mt-1">{errors.role}</p>}
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
