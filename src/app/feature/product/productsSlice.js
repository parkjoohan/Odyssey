import { createSlice, createAsyncThunk, configureStore} from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://dummyjson.com/products?limit=100';

const initialState = {
    products: [],
    limit: 10,
};

export const getProducts = createAsyncThunk('products/getProducts',async ()=>{
    try {
        const res = await axios.get(URL);
        return res.data.products;
    } catch (error) {
        return error.message;
    }
})

const productsSlice = createSlice({
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

const limitSlice = createSlice({
    name: "limit",
    initialState,
    reducers: {
        changeLimit:(state, action) => {
            state.limit = action.payload.limit;
        }
    },
});

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        limit: limitSlice.reducer,
    },
});

// export default productsSlice.reducer;
export const productActions = productsSlice.actions;
export const limitActions = limitSlice.actions;