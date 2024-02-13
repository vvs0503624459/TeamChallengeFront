import { RootState } from "../store";

// export const selectProductsStatus = (state) => state.products.status
// export const selectProducts = (state) => state.products.todos

export const selectMainProduct = (state: RootState) => state.products.productsList;
export const selectCurrentProduct = (state: RootState) => state.products.product;

export const selectIsLoading = (state: RootState) => state.products.isLoading;

