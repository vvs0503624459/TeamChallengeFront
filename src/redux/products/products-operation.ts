import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DeviceIdState, MainProductState } from "../types/initialEntity";

axios.defaults.baseURL = "https://team-chalenge.onrender.com";

export type InPayload = {
  id: string;
};

export const getMainDevises = createAsyncThunk<MainProductState[]>(
  "devices/main-page",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/v1/devices/main-page");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getDevises = createAsyncThunk<MainProductState[]>("devises/", async (_, thunkAPI) => {
  try {
    // помилка у шляху "/api/v1/deviCes"
    const { data } = await axios.get("/api/v1/devises");
    // console.log("devises/", response.data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getDeviсesByID = createAsyncThunk<DeviceIdState, InPayload>(
  "devises/byid",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/v1/devices/${payload.id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const editProductFavorite = createAsyncThunk<DeviceIdState>(
//   "water/editWater",
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await axios.patch(`api/waternotes/${id}`, { favorite: true });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
