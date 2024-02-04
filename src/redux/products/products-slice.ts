import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getMainDevises, getDevises, getDeviсesByID } from "./products-operation";

import { DeviceIdState, initialStateProductType } from "../types/initialEntity";

const initialState: initialStateProductType = {
  productsList: [],
  product: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getMainDevises.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(getDevises.fulfilled, (state, action) => {
        state.productsList = action.payload;
      })
      .addCase(getDeviсesByID.fulfilled, (state, action: PayloadAction<DeviceIdState>) => {
        state.product = action.payload;
      });
  },
});

export default productsSlice.reducer;

// export const { addProduct } = productsSlice.actions;
