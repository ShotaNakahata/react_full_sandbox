import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import cartRducer from "./cart-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartRducer
    }
})

export default store