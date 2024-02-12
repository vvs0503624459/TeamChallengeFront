import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
    signIn,
  //   signOut,
    currentUser,
  //   updateUser,
    // subscribeEmail,
} from "./auth-operation";

import { initialStateAuthType } from '../types/initialEntity';

const initialState: initialStateAuthType = {
  user: [],
  token: "",
  isLoggedIn: false,
  isRefreshing: true,
  isSubscribed: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
    .addCase(signUp.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.token = payload.token;
      state.isLoggedIn = true;
    })
    .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      // .addCase(subscribeEmail.fulfilled, (state, ) => {
      //   // state.user = payload.user;
      //   state.isLoggedIn = true;
      //   state.isSubscribed = true;
      // }),

});
export const authReducer = authSlice.reducer;
