import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Product = {
  id: number;
  title: string;
  // треба буде додати Інші поля продукту
};

axios.defaults.baseURL = "http://demo-java-sp.eu-north-1.elasticbeanstalk.com";

export const getMainProduct = createAsyncThunk<Product[], undefined>(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/v1/devises");
      console.log("getMainProduct", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// interface Product {
//   // Описуйте тип Product на основі даних, які ви отримуєте від API
//   id: number;
//   name: string;
//   // Інші поля продукту
// }

// export const getMainProduct = createAsyncThunk<Product[], void, { rejectValue: string }>(
//   'products/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/api/v1/devises');
//       console.log("getMainProduct", response);
//       return response.data as Product[];
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// const fetchTodos = createAsyncThunk('todos/fetchTodos',
// async () => {
//   // Just make the async request here, and return the response.
//   // This will automatically dispatch a `pending` action first,
//   // and then `fulfilled` or `rejected` actions based on the promise.
//   // as needed based on the
//   const res = await axios.get('/todos')
//   return res.data
// })
