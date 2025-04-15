import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ userId, productId }) => {
    const res = await axios.post("http://localhost:8000/api/cart/addToCart", {
      userId,
      productId,
      quantity: 1,
    });
    return res.data.cart.items;
  }
);

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (userId) => {
    const res = await axios.get(`http://localhost:8000/api/cart/getCart/${userId}`);
    return res.data.cart.items; 
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ userId, productId }) => {
    const res = await axios.post("http://localhost:8000/api/cart/removeFromCart", {
      userId,
      productId,
    });
    return res.data.cart.items;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      });
  },
});

export default cartSlice.reducer;
