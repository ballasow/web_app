import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import App from './App.jsx'
import store from './redux/store.js';
import { Toaster } from 'react-hot-toast';


// Créer une instance de QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Toaster position="top-right"
                toastOptions={{
                    duration: 5000,
                    style: {
                    background: '#363636',
                    color: '#fff',
                    },
                }}
            />
            <App />
        </QueryClientProvider>
    </Provider>
)
