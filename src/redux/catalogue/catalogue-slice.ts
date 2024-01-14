// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";

import {  getCatalogue } from "./catalogue-operation";

import { initialStateCatalogueType } from '../types/initialEntity';

const initialState: initialStateCatalogueType = {
  catalogueList: [],
};

export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
    .addCase(getCatalogue.fulfilled, (state, action) => {
      state.catalogueList = action.payload;
    });
  },
});

export default catalogueSlice.reducer;
