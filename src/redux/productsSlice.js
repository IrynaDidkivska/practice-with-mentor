import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './operators';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
  total: 0,
};

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.fulfilled, (state, { payload }) => {
      state.items = payload.products;
    });
  },
});

// export const productsSlice = slice.actions;

// Eкспортуємо редьюсер для того, щоб додати його в configureStore, котрий в store.js
export const productsReducer = slice.reducer;
