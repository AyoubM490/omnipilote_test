"use client"

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';

export const index = configureStore({
    reducer: {
        products: productsReducer,
    },
});

export default index;