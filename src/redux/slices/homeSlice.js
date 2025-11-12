import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name : 'home',
    initialState: {
        topics: null,
        articles: null,
    },
    reducers: {
        setTopics : (state, action) => {state.topics = action.payload},
        setArticles : (state, action) => {state.articles = action.payload},
    }
});

export const { setTopics, setArticles } = homeSlice.actions;
export default homeSlice.reducer;