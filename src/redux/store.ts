import { configureStore } from "@reduxjs/toolkit";
// import likeReducer from "./likeReducer";
// import cartReducer from "./cartReducer";
import { authReducer } from "./auth/auth-slice.js";
import productsReducer from "./products/products-slice.js";
import cartReducer from "./products/cartReducer.js";
import likeReducer from "./products/likeReducer.js";
import catalogueSlice from "./catalogue/catalogue-slice.js";

export const store = configureStore({
  reducer: {
    productsLikeState: likeReducer,
    productsInCart: cartReducer,
    products: productsReducer,
    auth:  authReducer,
    catalogueMenu: catalogueSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from '@reduxjs/toolkit'
// // Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { pokemonApi } from './services/pokemon'

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [pokemonApi.reducerPath]: pokemonApi.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(pokemonApi.middleware),
// })

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

//=========================================================
// import { configureStore } from '@reduxjs/toolkit';
// // import { authReducer } from './auth/auth-slice';
// // import { filtersReducer } from './filters/filters-slice';
// import { productsReducer } from './products/products-slice';
// import {
// //   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';

// // const authPersistConfig = {
// //   key: 'auth',
// //   storage,
// //   whitelist: ['token', 'theme'],
// // };
// export const store = configureStore({
//   reducer: {
//     // auth: persistReducer(authPersistConfig, authReducer),
//     // filters: filtersReducer,
//     products: productsReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });
// export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';

// import { productsReducer } from './products/products-slice';
// // import { filterReducer } from './filterSlice';

// // Створення state-configureStore Redux
// export const store = configureStore({
//   reducer: {
//     // Reducer для управління станом контактів
//     products: productsReducer,
//     // Reducer для управління станом фільтру
//     // filter: filterReducer,
//   },

// });
