import { configureStore } from "@reduxjs/toolkit";
import PrSlice from "./UserSlice";
import CateSlice from "./CategorySlice";

const Store = configureStore({
    reducer:{
        product:PrSlice,
        Category:CateSlice
    }
})

export default Store