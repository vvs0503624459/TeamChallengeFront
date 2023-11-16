import { configureStore } from "@reduxjs/toolkit";
// import likeReducer from "./likeReducer";
// import cartReducer from "./cartReducer";
// import productsReducer from "./productsReducer";

export const store = configureStore({
  reducer: {
    // productsLikeState: likeReducer,
    // productsInCart: cartReducer,
    // products: productsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
