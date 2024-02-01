import { useSelector } from "react-redux";
import { selectCurrentProduct } from "../products/products.selectors";

export const useProduct = () => {
  return {
    currentProduct: useSelector(selectCurrentProduct),
  };
};
