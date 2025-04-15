import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  CateList: [],
}

export const CreateCate = createAsyncThunk('Category/CreateCate', async (data) => {
  const res = await axios.post(`${import.meta.env.VITE_BASE_URL_CAT}/addCategory`, data)
  // const newCate = {
  //   id: res.data.id,
  //   ...data,
  // }
  return data
})

export const ViewCateList = createAsyncThunk('Category/ViewCateList', async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL_CAT}/viewCategory`)
  // console.log(res)
  return res.data.Cat_data
})


export const DeleteCate = createAsyncThunk('Category/DeleteCate', async (id) => {
  await axios.delete(`${import.meta.env.VITE_BASE_URL_CAT}/trashCat/${id}`)
  return id
})

export const UpdateCate = createAsyncThunk('Category/UpdateCate', async (data) => {
  // const { _id } = data
  // const res = await axios.put(`${import.meta.env.VITE_BASE_URL_CAT}/updateCat/${id}`, data)
  // return data
})
const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateCate.fulfilled, (state, action) => {
        state.CateList.push(action.payload)
        console.log(state.CateList)
      })
      .addCase(ViewCateList.fulfilled, (state, action) => {
        state.CateList = action.payload
      })
      .addCase(DeleteCate.fulfilled, (state, action) => {
        const id = action.payload
        const filterData = state.CateList.filter((ele) => {
          return ele._id != id
        })
        state.CateList = filterData
      })
      .addCase(UpdateCate.fulfilled, (state, action) => {
        // const { id } = action.payload
        // const Index_num = state.CateList.findIndex((ele) => {
        //   return ele._id == id
        // })
        // if (Index_num != -1) {
        //   state.CateList[Index_num] = action.payload
        // }
      })
  },
})

export default CategorySlice.reducer
