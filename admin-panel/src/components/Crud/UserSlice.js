import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { data } from 'autoprefixer'
import axios from 'axios'

const initialState = {
  ProductList: [],
}
export const Createpr = createAsyncThunk('product/Createpr', async (data) => {
  await axios.post(`${import.meta.env.VITE_BASE_URL_PRO}/createPr`, data)
  return data
})
export const Deletepr = createAsyncThunk('product/Deletepr', async (id) => {
  const res = axios.delete(`${import.meta.env.VITE_BASE_URL_PRO}/deleteProduct/${id}`)
  return id
})
export const ViewList = createAsyncThunk('product/ViewList', async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL_PRO}/viewProduct`)
  return res.data
})
export const UpdateProduct = createAsyncThunk('product/UpdateProduct', async (data) => {
  const { _id } = data
  await axios.put(`${import.meta.env.VITE_BASE_URL_PRO}/updateProduct/${_id}`, data)
  return data
})
const UserSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Createpr.fulfilled, (state, action) => {
        state.ProductList.push(action.payload)
      })
      .addCase(ViewList.fulfilled, (state, action) => {
        state.ProductList = action.payload
      })
      .addCase(Deletepr.fulfilled, (state, action) => {
        const id = action.payload

        const filterData = state.ProductList.filter((ele) => {
          return ele._id != id
        })
        state.ProductList = filterData
      })
      .addCase(UpdateProduct.fulfilled, (state, action) => {
        const { _id } = action.payload

        const Index_num = state.ProductList.findIndex((ele) => {
          return ele._id == _id
        })

        if (Index_num != -1) {
          state.ProductList[Index_num] = action.payload
        }
      })
  },
})

export default UserSlice.reducer
