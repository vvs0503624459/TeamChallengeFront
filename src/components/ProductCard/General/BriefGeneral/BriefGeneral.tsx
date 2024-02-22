import { useProduct } from "@/redux/hooks/usePeoduct";
import { useState } from "react";
import { BriefPropertiesOfProduct } from "@/components/BriefPropertiesOfProduct/BriefPropertiesOfProduct";
import {
  BriefImageContainer,
  BriefImageList,
  BriefImageItem,
  BriefImage,
  BriefImageBig,
  BriefImageBigDiv,
  BriefWrap,
} from "./BriefGeneral.styled";

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
          
          <BriefPropertiesOfProduct />
        </BriefWrap>
      )}
    </>
  );
};
