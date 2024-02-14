import { useProduct } from "@/redux/hooks/usePeoduct";
import { BriefContainer, BriefImage, BriefTitle, BriefWrap } from "./BriefSpecification.styled";

import noImage from "@/assets/no-image.png";
import { BriefPropertiesOfProduct } from "@/components/BriefPropertiesOfProduct/BriefPropertiesOfProduct";

export const BriefSpecification = () => {
  const { currentProduct } = useProduct();
  // console.log("product", currentProduct);

  const { title } = currentProduct!;

  return (
    <>
      {currentProduct && (
        <BriefWrap>
          <BriefImage
            src={currentProduct.photoUris[0] !== "1" ? currentProduct.photoUris[0] : noImage}
            alt={title}
          />
          <BriefContainer>
            <BriefTitle>{title}</BriefTitle>
            <BriefPropertiesOfProduct />
          </BriefContainer>
        </BriefWrap>
      )}
    </>
  );
};
