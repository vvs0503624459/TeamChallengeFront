import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DevicesState, MainProductState } from "../types/initialEntity";

axios.defaults.baseURL = "https://team-chalenge.onrender.com";

export const getMainDevises = createAsyncThunk<MainProductState[]>(
  "devices/main-page",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/v1/devices/main-page");
      return response.data as MainProductState[];
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDevises = createAsyncThunk<MainProductState[]>("devises/", async (_, thunkAPI) => {
  try {
    // помилка у шляху "/api/v1/deviCes"
    const response = await axios.get("/api/v1/devises");
    console.log("devises/", response.data);
    return response.data as MainProductState[];
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getDeviсesByID = createAsyncThunk<DevicesState>(
  "devises/byid",
  async (Id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/devices/${Id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
