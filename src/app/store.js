import { configureStore } from "@reduxjs/toolkit"
import {productsSlice, limitSlice} from './feature/product/productsSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        limit: limitSlice.reducer,
    },
});