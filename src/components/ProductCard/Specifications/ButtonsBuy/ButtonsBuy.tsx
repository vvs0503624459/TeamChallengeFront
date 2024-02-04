import {
  AddToCartBtn,
  BankWrap,
  BtnWrap,
  ButtonsBuyWrap,
  BuyToCredittBtn,
  ChevronRightIcon,
  CompareIcon,
  Discount,
  HartIcon,
  IconsContainer,
  IconsWrap,
  OldPrice,
  OnCreditPrice,
  OnCreditText,
  Price,
  PriceContainer,
} from "./ButtonsBuy.styled";
import iconsSprite from "@/assets/iconsSprite.svg";
import pumb from "@/assets/bank_pumb.png";
import abank from "@/assets/bank_abank.png";
import { useProduct } from "@/redux/hooks/usePeoduct";

export const ButtonsBuy = () => {
  const { currentProduct } = useProduct();

  return (
    <ButtonsBuyWrap>
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
            <HartIcon>
              <use href={iconsSprite + "#icon-heart"}></use>
            </HartIcon>
            <CompareIcon>
              <use href={iconsSprite + "#icon-compare"}></use>
            </CompareIcon>
          </IconsWrap>
          <AddToCartBtn type="button">
            <svg>
              <use href={iconsSprite + "#icon-cart-white"}></use>
            </svg>
            <p>Add to Cart</p>
          </AddToCartBtn>
        </IconsContainer>
      </BtnWrap>
      <BtnWrap>
        <div>
          <OnCreditText>On credit from</OnCreditText>
          <OnCreditPrice>
            {"8499".toLocaleString()} {"\u20B4"} / mon
          </OnCreditPrice>
        </div>
        <IconsContainer>
          <BankWrap>
            <img src={pumb} alt="Bank PUMB" />
            <p>3</p>
          </BankWrap>
          <BankWrap>
            <img src={abank} alt="Bank abank" />
            <p>4</p>
          </BankWrap>
          <ChevronRightIcon>
            <use href={iconsSprite + "#icon-chevron-right"}></use>
          </ChevronRightIcon>
          <BuyToCredittBtn type="button">
            <svg>
              <use href={iconsSprite + "#icon-coins"}></use>
            </svg>
            <p>Buy to Credit</p>
          </BuyToCredittBtn>
        </IconsContainer>
      </BtnWrap>
    </ButtonsBuyWrap>
  );
};
