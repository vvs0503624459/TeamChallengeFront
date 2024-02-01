import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DevicesState, MainProductState } from "../types/initialEntity";

axios.defaults.baseURL = "https://team-chalenge.onrender.com";

export type InPayload = {
  id: string;
};

export const getMainDevises = createAsyncThunk<MainProductState[]>(
  "devices/main-page",
  async () => {
    try {
      const response = await axios.get("/api/v1/devices/main-page");
      // const catalogue: CatalogueState[] = response.data
      // return catalogue
      return response.data;
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  }
);

export const getDevises = createAsyncThunk<MainProductState[]>("devises/", async () => {
  try {
    const response = await axios.get("/api/v1/devises");
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
});

export const getDevisesByID = createAsyncThunk<DevicesState, string | undefined>(
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
