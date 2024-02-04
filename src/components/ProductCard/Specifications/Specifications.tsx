import { useProduct } from "../../../redux/hooks/usePeoduct";
import { BriefSpecification } from "./BriefSpecification/BriefSpecification";
import { ButtonsBuy } from "./ButtonsBuy/ButtonsBuy";
import { BriefWrap, SpecificationsWrap } from "./Specifications.styled";
import { SpecificationsList } from "./SpecificationsList/SpecificationsList";

const Specifications = () => {
  const { currentProduct } = useProduct();

  return (
    <>
      {currentProduct && (
        <SpecificationsWrap>
          <BriefWrap>
            <BriefSpecification />
            <ButtonsBuy />
          </BriefWrap>
          <SpecificationsList product={currentProduct} />
        </SpecificationsWrap>
      )}
    </>
  );
};
export default Specifications;
