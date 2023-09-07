import { createSlice } from "@reduxjs/toolkit";

const toggleFormSlice = createSlice({
    name: 'toggleForm',
    initialState: {
        showForm: false,
    },
    reducers: {
        toggleDataForm: (state, action) => {
            state.showForm = !state.showForm
        },
    }
})
export const {toggleDataForm} = toggleFormSlice.actions;
export default toggleFormSlice.reducer;