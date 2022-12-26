import { configureStore } from "@reduxjs/toolkit"
import productsReducer from './feature/product/productsSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});