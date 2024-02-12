import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MainProductState } from '../types/initialEntity';

axios.defaults.baseURL = 'https://team-chalenge.onrender.com';

export type InPayload = {
  id: string;

};

export const getMainDevises = createAsyncThunk<MainProductState[]>(
  "devices/main-page",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/v1/devices/main-page");
      // console.log("devices/main-page", response.data);
      // const catalogue: CatalogueState[] = response.data
      // return catalogue
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDevises = createAsyncThunk<MainProductState[]>(
  "devises/",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/v1/devises");
      // console.log("devises/", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDevisesByID = createAsyncThunk<MainProductState[]>(
  "devises/byid",
  async (devisesId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/v1/devises/${devisesId}`);
      console.log("devises/byid", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);