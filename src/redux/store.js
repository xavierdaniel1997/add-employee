import {configureStore} from "@reduxjs/toolkit"
import customerSlice from "./customerSlice";
import toggleFormSlice from "./toggleFormSlice";

const store = configureStore({
    reducer:{
        customers: customerSlice,
        toggleForm: toggleFormSlice
    }
})
export default store;