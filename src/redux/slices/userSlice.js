import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "../../api/auth";

// Tenter de charger les informations utilisateur depuis le localStorage pour maintenir la session
const storedToken = localStorage.getItem('token');
const storedRole = localStorage.getItem('role');
const storedUserInfo = localStorage.getItem('userInfo');

const initialState = {
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
    token: storedToken || null,
    role: storedRole || null,
    isLoading: false,
    error: null,
    user_SidebarActive: false,
};

// Création du thunk asynchrone pour la connexion
export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await loginAPI(credentials);
            if (data && data.success) {
                console.log(data);
                // Sauvegarder les informations dans le localStorage
                localStorage.setItem('token', data.token);
                if (data.role) localStorage.setItem('role', data.role);
                // Preferer le payload user fourni par l'API si disponible
                const userPayload = data.user ? data.user : { role: data.role, name: data.name };
                localStorage.setItem('userInfo', JSON.stringify(userPayload));

                return { ...data, user: userPayload }; // Renvoyer toutes les données au reducer
            } else {
                return rejectWithValue((data && data.message) || 'La connexion a échoué.');
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message || 'Une erreur inconnue est survenue.');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.userInfo = null;
            state.token = null;
            state.role = null;
            state.error = null;
            // Clear persisted auth and user-related data
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            localStorage.removeItem('userInfo');
            localStorage.removeItem('likesTab');
            localStorage.removeItem('dislikesTab');
        },
        // Action utilitaire pour définir l'utilisateur (utilisé par ProtectedRoute)
        setUserInfo: (state, action) => {
            state.userInfo = action.payload || null;
            state.role = action.payload?.role || state.role;
            // Token est géré séparément par le flow d'auth, mais on la conserve si présent
            if (action.payload) {
                localStorage.setItem('userInfo', JSON.stringify(action.payload));
                if (action.payload.role) localStorage.setItem('role', action.payload.role);
            }
        },
        setUser_SidebarActive: (state, action) => { state.user_SidebarActive = action.payload },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.role = action.payload.role;
                state.userInfo = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { setUserInfo, logoutUser, setUser_SidebarActive } = userSlice.actions;
export default userSlice.reducer;