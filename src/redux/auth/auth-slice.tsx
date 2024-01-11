import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
    signIn,
  //   signOut,
  //   currentUser,
  //   updateUser,
  //   subscribeEmail,
} from "./auth-operation";

type UserInfo = {
  firstname: string;
  lastname: string;
  phoneNumber: string;
  email: string;
  password: string;
};

type Users = {
  user: UserInfo;
  token: string;
  isLoggedIn: boolean;
};

const initialState: Users = {
  user: {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    password: "",
  },
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
