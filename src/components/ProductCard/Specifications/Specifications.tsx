import { AddToCart } from "@/components/AddToCart/AddToCart";
import { useProduct } from "../../../redux/hooks/usePeoduct";
import { BriefSpecification } from "./BriefSpecification/BriefSpecification";
import { BriefWrap, ButtonsBuyWrap, SpecificationsWrap } from "./Specifications.styled";
import { SpecificationsList } from "./SpecificationsList/SpecificationsList";
import { BuyToCredit } from "@/components/BuyToCredit/BuyToCredit";

const Specifications = () => {
  const { currentProduct } = useProduct();

  return (
    <>
      {currentProduct && (
        <SpecificationsWrap>
          <BriefWrap>
            <BriefSpecification />
            <ButtonsBuyWrap>
              <AddToCart />
              <BuyToCredit />
            </ButtonsBuyWrap>
          </BriefWrap>
          <SpecificationsList product={currentProduct} />
        </SpecificationsWrap>
      )}
    </>
  );
};
export default Specifications;
