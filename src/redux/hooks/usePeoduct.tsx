import {
  selectMainProduct,
  selectCurrentProduct,
  selectIsLoading,
} from "../products/products.selectors";
import { useAppSelector } from "../hooks";

export const useProduct = () => {
  return {
    mainProduct: useAppSelector(selectMainProduct),
    currentProduct: useAppSelector(selectCurrentProduct),
    isLoading: useAppSelector(selectIsLoading),
  };
};
