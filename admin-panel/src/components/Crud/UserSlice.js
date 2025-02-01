import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import axios from "axios";

const initialState ={
    ProductList:[]
}
export const Createpr = createAsyncThunk("product/Createpr",async(data)=>{
    console.log("dtat",data);
    const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/product`,data)
    return res.data
})
export const Deletepr = createAsyncThunk('product/Deletepr',async(id)=>{
   const res =  axios.delete(`${import.meta.env.VITE_BASE_URL}/product/${id}`)
    // alert(ProductId)
    return id

})
export const ViewList = createAsyncThunk('product/ViewList',async()=>{
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/product`)
    return res.data
})
export const UpdateProduct = createAsyncThunk('product/UpdateProduct',async(data)=>{
    // console.log("Slice",data);
    
    const {id} = data
    console.log(id);
    
    await axios.put(`${import.meta.env.VITE_BASE_URL}/product/${id}`,data)

    return data
})
const UserSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(Createpr.fulfilled,(state,action)=>{

            state.ProductList.push(action.payload)
        })
        .addCase(ViewList.fulfilled,(state,action)=>{
            state.ProductList = action.payload
        })
        .addCase(Deletepr.fulfilled,(state,action)=>{
            const id = action.payload

            const filterData = state.ProductList.filter((ele)=>{
                return ele.id != id
            })
            state.ProductList = filterData
        })
        .addCase(UpdateProduct.fulfilled,(state,action)=>{
            const {id} = action.payload

            const Index_num = state.ProductList.findIndex((ele)=>{
                return ele.id == id
            })

            if(Index_num != -1){
                state.ProductList[Index_num]= action.payload
            }
        })
    }
})

export default UserSlice.reducer