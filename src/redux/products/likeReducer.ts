// import { AnyAction, createSlice } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

type State = {
  [id: string]: boolean;
};
const initialState: State = {
  skdlaskdasd: true, // для перевірки
};

export const likeReducer = createSlice({
  name: "like",
  initialState,
  reducers: {

    toggleLike: (state, action) => ({
      ...state,
      [action.payload]: !state[action.payload],
    }),
  },
});

export const { toggleLike } = likeReducer.actions;


export default likeReducer.reducer;
