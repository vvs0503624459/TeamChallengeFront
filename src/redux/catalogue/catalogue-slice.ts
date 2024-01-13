// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";

import { CatalogueState, getCatalogue } from "./catalogue-operation";

// interface Product {
//   // Описуйте тип Product на основі даних, які ви отримуєте від API
//   id: number;
//   name: string;
//   // Інші поля продукту
// }
// type Product = {
//   id: number;
//   title: string;
//   // треба буде додати Інші поля продукту
// };

export type initialStateRestaurantsListType = {
  catalogueList: CatalogueState[]
}

const initialState: initialStateRestaurantsListType = {
  catalogueList: [],
};

export const catalogueSlice = createSlice({
  name: "catalogueMenu",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(getCatalogue.fulfilled, (state, action) => {
      state.catalogueList = action.payload;
    });
  },
});

export default catalogueSlice.reducer;
