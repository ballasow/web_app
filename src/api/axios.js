import axios from "axios";
// import store from '@/redux/store';
import { logoutUser } from '@/redux/slices/userSlice';


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/',
    // baseURL: 'http://192.168.1.101:4000/',
});

// Request interceptor: set Authorization header dynamically from localStorage
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor: handle 401 globally by dispatching a redux logout.
// This clears redux state and localStorage consistently. We then navigate to /login.
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 401) {
            try {
                const store = (await import('@/redux/store')).default;
                // Dispatch logout to clear redux state
                store.dispatch(logoutUser());
            } catch {
                // Fallback: clear localStorage directly
                localStorage.removeItem('token');
                localStorage.removeItem('userInfo');
                localStorage.removeItem('role');
            }
            // Redirect to login (client-side full navigation to ensure route guards run)
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);