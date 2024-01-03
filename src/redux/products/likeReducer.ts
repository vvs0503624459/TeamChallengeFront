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
      // if (!state[action.payload]) {
      //   delete state[action.payload];
      // } else {
      //   state[action.payload] = !state[action.payload];
      // }
    }),

    // toggleLike: (state, action) => {
    //   const { payload: key } = action;
    //   // Створюємо новий об'єкт, який містить тільки ті ключі, для яких значення true
    //   return Object.fromEntries(
    //     Object.entries(state).filter(([currentKey, value]) => currentKey !== key || value === true)
    //   );
    // },
  },
});

export const { toggleLike } = likeReducer.actions;


export default likeReducer.reducer;
