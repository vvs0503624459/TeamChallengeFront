import { useProduct } from "../../../redux/hooks/usePeoduct";
import { SpecificationsList } from "./SpecificationsList/SpecificationsList";

const Specifications = () => {
  const { currentProduct } = useProduct();

  return <>{currentProduct && <SpecificationsList product={currentProduct} />}</>;
};
export default Specifications;
