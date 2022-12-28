import { configureStore } from "@reduxjs/toolkit"
import {productsSlice, limitSlice} from './feature/product/productsSlice';

export const store = configureStore({
    reducer: {
        // 상품 데이터
        products: productsSlice.reducer,
        // 출력 데이터 개수
        limit: limitSlice.reducer,
    },
});