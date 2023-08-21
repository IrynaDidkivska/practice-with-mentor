import { createSlice } from '@reduxjs/toolkit';
import { registerUserThunk } from './operators';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    password: '',
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(registerUserThunk.fulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.isLoggedIn = true;
    });
  },
});

export const userReducer = userSlice.reducer;
