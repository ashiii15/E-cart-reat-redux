import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./wishListSlice";
import cartSlice from "./cartSlice";

 export const store = configureStore({
    reducer:{
        wishListReducer:wishListSlice,
        cartReducer:cartSlice

    }
})
