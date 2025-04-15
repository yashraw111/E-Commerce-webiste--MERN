import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  ProductList: [],
};
export const ViewList = createAsyncThunk("product/ViewList", async () => {
  const res = await axios.get(
    `http://localhost:8000/product/viewProduct`
  );
  return res.data;
});

const UserSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ViewList.fulfilled, (state, action) => {
      state.ProductList = action.payload;
    });
  },
});
export default UserSlice.reducer;
