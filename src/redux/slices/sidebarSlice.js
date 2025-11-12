import { createSlice } from "@reduxjs/toolkit";

const sidebar_ActiveSlice = createSlice({
    name : 'sidebar_Active',
    initialState: {active :false},
    reducers: {
        setActive : (state, action) => {state.active = action.payload },
    }
});

export const { setActive } = sidebar_ActiveSlice.actions;
export default sidebar_ActiveSlice.reducer;