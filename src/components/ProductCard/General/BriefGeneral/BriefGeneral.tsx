import { useProduct } from "@/redux/hooks/usePeoduct";
import { useState } from "react";
import {
  BriefImageContainer,
  BriefImageList,
  BriefImageItem,
  BriefImage,
  BriefImageBig,
  BriefPropertiesContainer,
  //   BriefTitle,
  BriefImageBigDiv,
  BriefWrap,
  Property,
  PropertyWrap,
  BriefContainer,
} from "./BriefGeneral.styled";
import iconsSprite from "@/assets/iconsSprite.svg";
// import noImage from "@/assets/no-image.png";

const sameImage = [
  {
    id: "abc10",
    image:
      "https://media.currys.biz/i/currysprod/10242696_004?$l-large$&fmt=auto",
  },
  {
    id: "abc11",
    image:
      "https://media.currys.biz/i/currysprod/10242696_002?$l-large$&fmt=auto",
  },
  {
    id: "abc9",
    image:
      "https://media.currys.biz/i/currysprod/10242696_003?$l-large$&fmt=auto",
  },
  {
    id: "abc12",
    image:
      "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-blue-back.png?v=42",
  },
  {
    id: "abc13",
    image:
      "https://media.currys.biz/i/currysprod/10242696_004?$l-large$&fmt=auto",
  },
];

export const BriefGeneral = () => {
  const { currentProduct } = useProduct();
  console.log("product", currentProduct);

  const { title } = currentProduct!;

  //   const [selectedImage, setSelectedImage] = useState<string>(
  //     currentProduct.photoUris[0] !== "1"
  //       ? currentProduct.photoUris[0]
  //       : noImage
  //   );
  const [selectedImage, setSelectedImage] = useState<string>(
    sameImage[0].image
  );

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <>
      {currentProduct && (
        <BriefWrap>
          <BriefImageContainer>
            <BriefImageList>
              {sameImage.map(({ id, image }) => (
                <BriefImageItem id={id} onClick={() => handleImageClick(image)}>
                  <BriefImage src={image} alt={title} />
                </BriefImageItem>
              ))}
            </BriefImageList>
            <BriefImageBigDiv>
              <BriefImageBig src={selectedImage} alt={title} />
            </BriefImageBigDiv>
          </BriefImageContainer>

          <BriefContainer>
            {/* <BriefTitle>{currentProduct.title}</BriefTitle> */}
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
                        currentProduct?.specificationGroups[3]
                          ?.specifications[0]?.value
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
                        currentProduct.specificationGroups[7]
                          .specifications[0] &&
                        currentProduct.specificationGroups[7].specifications[0]
                          .value}
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
                        currentProduct.specificationGroups[4]
                          .specifications[0] &&
                        currentProduct.specificationGroups[4].specifications[0]
                          .value}
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
                        currentProduct.specificationGroups[8]
                          .specifications[0] &&
                        currentProduct.specificationGroups[8].specifications[0]
                          .value}
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
                        currentProduct.specificationGroups[4]
                          .specifications[1] &&
                        currentProduct.specificationGroups[4].specifications[1]
                          .value}
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
