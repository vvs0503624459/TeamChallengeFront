import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMainProduct } from './products-operation';


// interface Product {
//   // Описуйте тип Product на основі даних, які ви отримуєте від API
//   id: number;
//   name: string;
//   // Інші поля продукту
// }


// interface UsersState {
//   products: [],
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

// const initialState = {
//   loading: 'idle',
//   status: 'uninitialized',
//   products: [],
//   // isLoading: false,
//   error: null,
// } as UsersState;
interface Users {
  id: number;
  title: string;
  // products: [],
  // loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

interface UsersState {
  products: Users[],
  // isLoading: 'idle' | 'pending' | 'succeeded' | 'failed',
  isLoading: boolean,
  error: null,
}
const initialState: UsersState = {
  products: [],
  // isLoading: 'idle',
  isLoading: false,
  error: null,

};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{title: string}>) => {
      state.products.push({
        id: state.products.length,
        title: action.payload.title,
      })
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMainProduct.pending, (state) => {
        // state.status = 'loading';
        state.isLoading = true;
      })
      
      .addCase(getMainProduct.fulfilled, (state, action) => {
        // state.status = 'succeeded';
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMainProduct.rejected, (state, ) => {
        // state.status = 'failed';
        state.isLoading = false;
        // state.error = action.payload;
      })
  },
})

export default productsSlice.reducer;

export const { addProduct } = productsSlice.actions;