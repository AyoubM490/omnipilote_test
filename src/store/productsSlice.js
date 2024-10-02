"use client"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, name: 'Copieurs, imprimantes & multifonctions' },
        { id: 2, name: 'Smartphone, Tablette, PC, Laptop, PDA' },
    ],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.products.filter(
                (product) => product.id !== action.payload.id
            )
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id
            )
            if (index !== -1) state.products[index] = action.payload
        },
        // Action to handle loading products (you can use for async actions)
        setProducts: (state, action) => {
            state.products = action.payload;
            state.status = 'succeeded';
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setSucceeded: (state) => {
            state.status = 'succeeded'
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    }
})

export const {
    addProduct,
    removeProduct,
    updateProduct,
    setProducts,
    setLoading,
    setSucceeded,
    setError,
} = productsSlice.actions;

export default productsSlice.reducer;