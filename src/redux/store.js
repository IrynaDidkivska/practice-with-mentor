import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './productsSlice';
import { cartReducer } from './cartSlise';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
