import { Link } from 'react-router-dom'

function NotFound() {
    return <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-gray-600 mb-4">Page non trouvée</p>
        <Link to="/" className="text-blue-700 hover:underline">Retour à l'accueil</Link>
    </div>
}

export default NotFound
