import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductState } from '../types/initialEntity';

axios.defaults.baseURL = 'http://team-chalenge.onrender.com';

export const getMainDevises = createAsyncThunk<ProductState[]>(
  "catalogue",
  async () => {
    try {
      const response = await axios.get("/api/v1/devices/main-page");
      console.log("catalogue", response.data);
      // const catalogue: CatalogueState[] = response.data
      // return catalogue
      return response.data
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
);

export const getDevises = createAsyncThunk<ProductState[]>(
  "products/getAll",
  async () => {
    try {
      const response = await axios.get("/api/v1/devises");
      console.log("getMainProduct", response.data);
      return response.data;
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
);
