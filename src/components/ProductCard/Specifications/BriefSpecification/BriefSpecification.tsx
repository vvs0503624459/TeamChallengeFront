import { useProduct } from "@/redux/hooks/usePeoduct";
import {
  BriefImage,
  BriefPropertiesContainer,
  BriefTitle,
  BriefWrap,
  Property,
  PropertyWrap,
} from "./BriefSpecification.styled";
import iconsSprite from "@/assets/iconsSprite.svg";
import noImage from "@/assets/no-image.png";

export const BriefSpecification = () => {
  const { currentProduct } = useProduct();
  console.log("product", currentProduct);

  return (
    <>
      {currentProduct && (
        <BriefWrap>
          <BriefImage
            src={currentProduct.photoUris[0] !== "1" ? currentProduct.photoUris[0] : noImage}
            alt={currentProduct.title}
          />
          <div>
            <BriefTitle>{currentProduct.title}</BriefTitle>
            <BriefPropertiesContainer>
              <PropertyWrap>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-diagonal"}></use>
                  </svg>
                  <p>Screen diagonal</p>
                </Property>
                <p>Main camera</p>
              </PropertyWrap>
              <div>
                <p>Processor</p>
                <p>Battery capacity</p>
              </div>
              <div>
                <p>Front camera</p>
                <p>Number of cores</p>
              </div>
            </BriefPropertiesContainer>
          </div>
        </BriefWrap>
      )}
    </>
  );
};
