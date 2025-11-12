import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name : 'admin',
    initialState: {
        apActive :false,
        upload_FormActive :false
    },
    reducers: {
        setapActive : (state, action) => {state.apActive = action.payload },
        setuploadActive : (state, action) => {state.upload_FormActive = action.payload },
    }
});

export const { setapActive, setuploadActive } = adminSlice.actions;
export default adminSlice.reducer;