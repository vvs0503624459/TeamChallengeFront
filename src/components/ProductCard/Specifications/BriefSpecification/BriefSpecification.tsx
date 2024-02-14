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
import { DeviceIdState } from "@/redux/types/initialEntity";

export const BriefSpecification = () => {
  const { currentProduct } = useProduct();
  // console.log("product", currentProduct);

  const { title } = currentProduct!;

  const onScreenDiagonal = (currentProduct: DeviceIdState) => {
    return (
      <p>
        {
          currentProduct.specificationGroups
            .find((item) => item.title === "Display")
            ?.specifications.find((property) => property.title === "Screen diagonal")?.value
        }
      </p>
    );
  };

  const onMainCamera = (currentProduct: DeviceIdState) => {
    return (
      <p>
        {
          currentProduct.specificationGroups
            .find((item) => item.title === "Main camera")
            ?.specifications.find((property) => property.title === "Main camera")?.value
        }
      </p>
    );
  };

  const onProcessor = (currentProduct: DeviceIdState) => {
    return (
      <p>
        {
          currentProduct.specificationGroups
            .find((item) => item.title === "Processor")
            ?.specifications.find((property) => property.title === "Processor")?.value
        }
      </p>
    );
  };

  const onFrontCamera = (currentProduct: DeviceIdState) => {
    return (
      <p>
        {
          currentProduct.specificationGroups
            .find((item) => item.title === "Front camera")
            ?.specifications.find((property) => property.title === "Front camera")?.value
        }
      </p>
    );
  };

  const onNumberOfCores = (currentProduct: DeviceIdState) => {
    return (
      <p>
        {
          currentProduct.specificationGroups
            .find((item) => item.title === "Processor")
            ?.specifications.find((property) => property.title === "Number of cores")?.value
        }
      </p>
    );
  };

  const onBatteryCapacity = (currentProduct: DeviceIdState) => {
    return (
      <p>
        {
          currentProduct.specificationGroups
            .find((item) => item.title === "Battery capacity")
            ?.specifications.find((property) => property.title === "Battery capacity")?.value
        }
      </p>
    );
  };

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
            <BriefPropertiesContainer>
              <PropertyWrap>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-diagonal"}></use>
                  </svg>
                  <div>
                    <p>Screen diagonal</p>
                    {onScreenDiagonal(currentProduct)}
                  </div>
                </Property>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-camera"}></use>
                  </svg>
                  <div>
                    <p>Main camera</p>
                    {onMainCamera(currentProduct)}
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
                    {onProcessor(currentProduct)}
                  </div>
                </Property>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-battery"}></use>
                  </svg>
                  <div>
                    <p>Battery capacity</p>
                    {onBatteryCapacity(currentProduct)}
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
                    {onFrontCamera(currentProduct)}
                  </div>
                </Property>
                <Property>
                  <svg>
                    <use href={iconsSprite + "#icon-cores-in-cpu"}></use>
                  </svg>
                  <div>
                    <p>Number of cores</p>
                    {onNumberOfCores(currentProduct)}
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
