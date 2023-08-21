import { addCartThunk, fetchCartThunk } from './operators';

const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  extraReducers: builder => {
    builder
      .addCase(fetchCartThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addCartThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      });
  },
});

export const cartReducer = cartSlice.reducer;
