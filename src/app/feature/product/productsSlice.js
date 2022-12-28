import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    productslist:[],
    products: [],
    limit: 10,
};

// 초기 데이터 불러오기
export const getProducts = createAsyncThunk('products/getProducts',async ()=>{
    try {
        const res = await axios.get(`https://dummyjson.com/products?limit=100`)
        return res.data.products;
        
    } catch (error) {
        return error.message;
    }
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // 전체 카테고리 검색
        filterByAll: (state, action) => {
            state.products = state.productslist.filter((product)=> {return (product.title.includes(action.payload) || product.brand.includes(action.payload) || product.description.includes(action.payload))})
        },
        // 이름 카테고리 검색
        filterByName: (state, action) => {
            state.products = state.productslist.filter((product)=> {return product.title.includes(action.payload)})
        },
        // 브랜드 카테고리 검색
        filterByBrand: (state, action) => {
            state.products = state.productslist.filter((product)=> {return product.brand.includes(action.payload)})
        },
        // 상품내용 카테고리 검색
        filterByDescription: (state, action) => {
            state.products = state.productslist.filter((product)=> {return product.description.includes(action.payload)})
        },
    },
    extraReducers(builder){
        builder
        .addCase(getProducts.pending,(state,action)=>{
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.products = action.payload
            state.productslist = action.payload
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.message=action.error.message
        })
    }
});

export const limitSlice = createSlice({
    name: "limit",
    initialState,
    reducers: {
        // 출력하는 행의 개수 변경
        changeLimit:(state, action) => {
            state.limit = action.payload.limit;
        }
    },
});

export const productActions = productsSlice.actions;
export const limitActions = limitSlice.actions;

export const { filterByAll, filterByName, filterByBrand, filterByDescription } = productsSlice.actions;