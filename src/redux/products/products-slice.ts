import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { getMainProduct } from './products-operation';

interface UsersState {
  products: [],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  loading: 'idle',
  status: 'uninitialized',
  products: [],
  // isLoading: false,
  error: null,
} as UsersState;

export const todosSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMainProduct.pending, (state, action) => {
        state.status = 'loading';
        state.isLoading = true;
        state.error = null;
      })
      
      .addCase(getMainProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMainProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export default productsSlice.reducer;