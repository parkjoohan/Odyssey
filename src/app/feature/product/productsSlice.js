import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://dummyjson.com/products?limit=100';

const initialState = {
    products: [],
};

export const getProducts = createAsyncThunk('products/getProducts',async ()=>{
    try {
        const res = await axios.get(URL);
        return res.data.products;
    } catch (error) {
        return error.message;
    }
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getProducts.pending,(state,action)=>{
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.message=action.error.message
        })
    }
});
// export const { } = productsSlice.actions;

export default productsSlice.reducer;