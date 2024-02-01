// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getMainDevises, getDevises, getDevisesByID } from "./products-operation";

import { DevicesState, initialStateProductType } from "../types/initialEntity";

// interface UsersState {
//   products: [],
//   loading: 'idle' | 'pending' | 'succeeded' | 'failed'
// }

const initialState: initialStateProductType = {
  productsList: [],
  currentProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      // .addCase(getMainDevises.fulfilled, (state, { payload }) => {
      //   // state.status = 'succeeded';
      //   // state = payload;
      //   state.splice(0, state.length, ...payload);
      // })
      .addCase(getMainDevises.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(getDevises.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(getDevisesByID.fulfilled, (state, action: PayloadAction<DevicesState>) => {
        state.currentProduct = action.payload;
      });

    // або можна додати й інші обробки помилок чи завантаження
  },
});

export default productsSlice.reducer;

// export const { addProduct } = productsSlice.actions;
