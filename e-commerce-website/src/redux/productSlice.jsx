import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,
    searchedProduct : ""
}

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducst", async ()=>{
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
})

export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSelectedProduct : (state, action)=>{
      state.selectedProduct = action.payload
    },

    setSearchedProduct : (state,action)=>{
      state.searchedProduct = action.payload
    }
  },

  extraReducers: (builder)=> {
    builder.addCase(getAllProducts.pending, (state, action)=>{
      state.loading = true;
    })
    builder.addCase(getAllProducts.fulfilled, (state,action )=>{
      state.loading = false;
      state.products = action.payload;
    })
  }
})

export const { setSelectedProduct, setSearchedProduct} = productSlice.actions

export default productSlice.reducer

