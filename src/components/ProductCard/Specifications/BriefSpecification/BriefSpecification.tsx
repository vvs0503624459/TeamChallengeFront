import { useProduct } from "@/redux/hooks/usePeoduct";
import {
  BriefImage,
  BriefPropertiesContainer,
  BriefTitle,
  BriefWrap,
  Property,
  PropertyWrap,
  BriefContainer,
} from "./BriefSpecification.styled";
import iconsSprite from "@/assets/iconsSprite.svg";
import noImage from "@/assets/no-image.png";

export const BriefSpecification = () => {
  const { currentProduct } = useProduct();
  console.log("product", currentProduct);

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
            <BriefTitle>{currentProduct.title}</BriefTitle>
            <BriefPropertiesContainer>
              <PropertyWrap>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-diagonal"}></use>
                  </svg>
                  <div>
                    <p>Screen diagonal</p>
                    <p>
                      {
                        // currentProduct.specificationGroups[3] &&
                        // currentProduct.specificationGroups[3].specifications[0] &&
                        currentProduct?.specificationGroups[3]?.specifications[0]?.value
                      }
                    </p>
                  </div>
                </Property>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-camera"}></use>
                  </svg>
                  <div>
                    <p>Main camera</p>
                    <p>
                      {currentProduct.specificationGroups[7] &&
                        currentProduct.specificationGroups[7].specifications[0] &&
                        currentProduct.specificationGroups[7].specifications[0].value}
                    </p>
                  </div>
                </Property>
              </PropertyWrap>
              <PropertyWrap>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-cpu"}></use>
                  </svg>
                  <div>
                    <p>Processor</p>
                    <p>
                      {currentProduct.specificationGroups[4] &&
                        currentProduct.specificationGroups[4].specifications[0] &&
                        currentProduct.specificationGroups[4].specifications[0].value}
                    </p>
                  </div>
                </Property>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-battery"}></use>
                  </svg>
                  <div>
                    <p>Battery capacity</p>
                    <p>6,7"</p>
                  </div>
                </Property>
              </PropertyWrap>
              <PropertyWrap>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-front-camera"}></use>
                  </svg>
                  <div>
                    <p>Front camera</p>
                    <p>
                      {currentProduct.specificationGroups[8] &&
                        currentProduct.specificationGroups[8].specifications[0] &&
                        currentProduct.specificationGroups[8].specifications[0].value}
                    </p>
                  </div>
                </Property>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-cores-in-cpu"}></use>
                  </svg>
                  <div>
                    <p>Number of cores</p>
                    <p>
                      {currentProduct.specificationGroups[4] &&
                        currentProduct.specificationGroups[4].specifications[1] &&
                        currentProduct.specificationGroups[4].specifications[1].value}
                    </p>
                  </div>
                </Property>
              </PropertyWrap>
            </BriefPropertiesContainer>
          </BriefContainer>
        </BriefWrap>
      )}
    </>
  );
};
