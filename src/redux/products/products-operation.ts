import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MainProductState, DeviceIdState } from '../types/initialEntity';

axios.defaults.baseURL = 'https://team-chalenge.onrender.com';

export type InPayload = {
  id: string;

};

export const getMainDevises = createAsyncThunk<MainProductState[]>(
  "devices/main-page",
  async () => {
    try {
      const response = await axios.get("/api/v1/devices/main-page");
      console.log("devices/main-page", response.data);
      // const catalogue: CatalogueState[] = response.data
      // return catalogue
      return response.data as MainProductState[];
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
);

export const getDevises = createAsyncThunk<MainProductState[]>(
  "devises/",
  async () => {
    try {
      // помилка у шляху "/api/v1/deviCes"
      const response = await axios.get("/api/v1/devises");
      console.log("devises/", response.data);
      return response.data as MainProductState[];
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
);

export const getDeviсesByID = createAsyncThunk<DeviceIdState, InPayload>(
  "devices/byid",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`/api/v1/devices/${payload.id}`);
      console.log("devices/byid", response.data);
      return response.data as DeviceIdState;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

