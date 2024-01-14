import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { CatalogueState } from '../types/initialEntity';

axios.defaults.baseURL = 'http://team-chalenge.onrender.com';

export const getCatalogue = createAsyncThunk<CatalogueState[]>(
  "catalogue",
  async () => {
    try {
      const response = await axios.get("http://team-chalenge.onrender.com/api/v1/catalogue");
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

