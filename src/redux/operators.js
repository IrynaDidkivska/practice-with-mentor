import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsAPI = axios.create({
  baseURL: 'https://dummyjson.com/',
});
export const cartAPI = axios.create({
  baseURL: 'https://64abd6919edb4181202ea4d0.mockapi.io/',
});
///user
export const userAPI = axios.create({
  baseURL: 'https://64de0f84825d19d9bfb1f614.mockapi.io/',
});
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async (params, thunkAPI) => {
    try {
      const { data } = await productsAPI.get('products', {
        params: { limit: 12, ...params },
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProductsByQuery = createAsyncThunk(
  'products/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await productsAPI.get('products/search');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCartThunk = createAsyncThunk(
  'cart/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await cartAPI.get('cart');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCartThunk = createAsyncThunk(
  'cart/add',
  async (cart, thunkAPI) => {
    try {
      const { data } = await cartAPI.post('cart', cart);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeCartThunk = createAsyncThunk(
  'cart/remove',
  async (id, thunkAPI) => {
    try {
      await cartAPI.delete(`cart/${id}`);
      thunkAPI.dispatch(fetchCartThunk());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//User
export const registerUserThunk = createAsyncThunk(
  'user/add',
  async (body, thunkAPI) => {
    try {
      const { data } = await userAPI.post(`user`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
