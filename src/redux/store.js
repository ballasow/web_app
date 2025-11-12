import { configureStore } from "@reduxjs/toolkit";
import adminPanelReducer  from './slices/adminSlice';
import loaderReducer from './slices/loaderSlice';
import sidebar_ActiveReducer  from './slices/sidebarSlice';
import userReducer  from './slices/userSlice';
import homeReducer  from './slices/homeSlice';

const store = configureStore({
    reducer: {
        adminPanelReducer,
        homeReducer,
        loaderReducer, 
        sidebar_ActiveReducer,
        userReducer,
    }
})

export default store;
