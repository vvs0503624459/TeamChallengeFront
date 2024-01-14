import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";

type CartState = {
  [id: string]: number;
};
// const initialState: CartState = {
// };
export const cartReducer = createSlice({
  name: "cart",
  // initialState,
  initialState:  {
    skdlaskdasd: 5, // для перевірки
  } as CartState,
  reducers: {
    addProductToCart: (state, action) => ({
      // додать у кошик
      ...state,
      [action.payload.id]:
        // (state[action.payload.id] || 0) + action.payload.count,
        (state[action.payload.id] || 0) + 1,
    }),
    removeProductFromCart: (state, action) => {
      // убрать з кошику
      return omit(state, action.payload.id);
    },
    changeProductQuantity: (state, action) => ({
      //  кнопки + / - інкр./декр.
      ...state,
      [action.payload.id]: action.payload.count, // count це змінна
    }),
  },
});
export const {
  addProductToCart,
  removeProductFromCart,
  changeProductQuantity,
} = cartReducer.actions;
export default cartReducer.reducer;
