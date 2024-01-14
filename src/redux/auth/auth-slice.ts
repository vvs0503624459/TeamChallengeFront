import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
    signIn,
  //   signOut,
  //   currentUser,
  //   updateUser,
  //   subscribeEmail,
} from "./auth-operation";

import { initialStateAuthType } from '../types/initialEntity';

const initialState: initialStateAuthType = {
  user: [],
  token: "",
  isLoggedIn: false,
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
    // .addCase(signIn.fulfilled, (state, { payload }: { payload: { user: UserInfo; token: string } }) => {
    //     state.user = payload.user;
    //     state.token = payload.token;
    //     state.isLoggedIn = true;
    //   })
    .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

});
export const authReducer = authSlice.reducer;
