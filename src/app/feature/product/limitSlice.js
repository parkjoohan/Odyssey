import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    limit: 10,
};

export const limitSlice = createSlice({
    name: "limit",
    initialState,
    reducers: {
        changeLimit(state, action){
            console.log(state)
            console.log(action)
        }
    },
});

export const { changeLimit } = limitSlice.actions;

export default limitSlice.reducer;