// src/store.ts

import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice' // Ajuste o caminho conforme necessário
import { apiSlice } from './features/api/apiSlice' // Se você estiver usando Redux Toolkit Query

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer // Se estiver usando Redux Toolkit Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware) // Se estiver usando Redux Toolkit Query
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
