import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export type CatalogueState = {
  id: string
  title: string
  groupSpecifications: [{
    nameOfGroup: string
    hashtagsOfName: {
      catalogue: string
      catalogueGroupSpecifications: [{
        title: string
        hashTagsOfTitle: {
          brand: string
          catalogue: string
        }
      }]

    }
  }
]
}

axios.defaults.baseURL = 'http://team-chalenge.onrender.com';

export const getCatalogue = createAsyncThunk<CatalogueState[]>(
  "catalogue",
  async () => {
    try {
      const response = await axios.get("/api/v1/catalogue");
      console.log("catalogue", response.data);
      const catalogue: CatalogueState[] = response.data
      return catalogue
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
);

