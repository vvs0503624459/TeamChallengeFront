import { selectCurrentProduct } from "../products/products.selectors";
import { useAppSelector } from "../hooks";

export const useProduct = () => {
  return {
    currentProduct: useAppSelector(selectCurrentProduct),
  };
};
