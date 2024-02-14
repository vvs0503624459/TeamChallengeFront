import { useProduct } from "@/redux/hooks/usePeoduct";
import iconsSprite from "@/assets/iconsSprite.svg";
import {
  AddToCartBtn,
  BtnWrap,
  Discount,
  IconsContainer,
  IconsWrap,
  OldPrice,
  Price,
  PriceContainer,
} from "./AddToCart.styled";
import { HartButton } from "../HartButton/HartButton";
import { CompareButton } from "../CompareButton/CompareButton";

export const AddToCart = () => {
  const { currentProduct } = useProduct();

  return (
    <BtnWrap>
      {currentProduct && (
        <PriceContainer>
          <div>
            <OldPrice>
              {currentProduct.price.toLocaleString()} {"\u20B4"}
            </OldPrice>
            <Price>
              {currentProduct.price.toLocaleString()} {"\u20B4"}
            </Price>
          </div>
          <Discount>
            <p>-{currentProduct.discount} %</p>
          </Discount>
        </PriceContainer>
      )}
      <IconsContainer>
        <IconsWrap>
          <HartButton />
          <CompareButton />
        </IconsWrap>
        <AddToCartBtn type="button">
          <svg>
            <use href={iconsSprite + "#icon-cart-white"}></use>
          </svg>
          <p>Add to Cart</p>
        </AddToCartBtn>
      </IconsContainer>
    </BtnWrap>
  );
};
