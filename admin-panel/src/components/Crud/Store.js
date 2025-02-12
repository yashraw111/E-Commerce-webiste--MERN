import { configureStore } from "@reduxjs/toolkit";
import PrSlice from "./UserSlice";
import CateSlice from "./CategorySlice";
import SubCateSlice from './SubCategory'

const Store = configureStore({
    reducer:{
        product:PrSlice,
        Category:CateSlice,
        SubCategory:SubCateSlice
    }
})

export default Store