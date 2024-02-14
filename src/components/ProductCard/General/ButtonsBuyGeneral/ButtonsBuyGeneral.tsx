import {
  AddToCartBtn,
  BankWrap,
  BtnWrap,
  ButtonsBuyWrap,
  BuyToCredittBtn,
  ChevronRightIcon,
  CompareIcon,
  Discount,
  HartButton,
  HartIcon,
  IconsContainer,
  IconsWrap,
  OldPrice,
  OnCreditPrice,
  OnCreditText,
  Price,
  PriceContainer,
  DeliveryInfoWrap,
  LocationWrap,
  LocationBtnRight,
  FirstWrap,
  DeliveryShipSpan,
  SecondWrap,
  DeliveryWrap,
  DeliveryDiv,
  DeliveryText,
  DeliveryShipText,
  DeliverySpanSecond,
  DeliveryTextSecond,
} from "./ButtonsBuyGeneral.styled";
import iconsSprite from "@/assets/iconsSprite.svg";
import pumb from "@/assets/bank_pumb.png";
import abank from "@/assets/bank_abank.png";
import { useProduct } from "@/redux/hooks/usePeoduct";
import { useState } from "react";
import { DeviceIdState } from "@/redux/types/initialEntity";
// import { DeviceIdState } from "@/redux/types/initialEntity";
import {
  IconRight,
  GeneralLocation,
  GeneralOfice,
  GarantShield,
  GarantCar,
  MyWallet,
} from "@/components/IconComponents/IconsCatalogue";

export const ButtonsBuyGeneral = () => {
  const { currentProduct } = useProduct();
  const [isFavoriteProduct, setIsFavoriteProduct] = useState<boolean>(false);

  const handleHartBtn = (): void => {
    const favoriteProduct = JSON.parse(
      localStorage.getItem("favoriteProducts") || "''"
    );
    if (!isFavoriteProduct) {
      localStorage.setItem(
        "favoriteProducts",
        JSON.stringify([...favoriteProduct, currentProduct])
      );
      setIsFavoriteProduct(true);
      return;
    }
    if (currentProduct) {
      const index = favoriteProduct.findIndex(
        (product: DeviceIdState) => product.id === currentProduct.id
      );
      favoriteProduct.splice(index, 1);
      localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProduct));
    }
    return;
  };
  const style = {
    fill: "#1e1d21",
  };
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
            <HartButton type="button" onClick={handleHartBtn}>
              <HartIcon>
                <use href={iconsSprite + "#icon-heart"}></use>
              </HartIcon>
            </HartButton>
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

      <DeliveryInfoWrap>
        <LocationWrap>
          <FirstWrap>
            <GeneralLocation />
            <DeliveryText>
              Delivery in:<DeliveryShipSpan>Kyiv</DeliveryShipSpan>
            </DeliveryText>
          </FirstWrap>

          <LocationBtnRight>
            <IconRight />
          </LocationBtnRight>
        </LocationWrap>
        <DeliveryWrap>
          <DeliveryDiv>
            <FirstWrap>
              <GeneralOfice />
              <DeliveryText>Pickup from postal office</DeliveryText>
            </FirstWrap>
            <SecondWrap>
              <DeliveryShipText>Shipping tomorrow</DeliveryShipText>
              <p>Free of charge</p>
            </SecondWrap>
          </DeliveryDiv>
          <DeliveryDiv>
            <FirstWrap>
              <GarantCar style={style} />
              <DeliveryText>Delivery by TechEase courier</DeliveryText>
            </FirstWrap>
            <SecondWrap>
              <DeliveryShipText>Shipping on Aug 1 from 10 AM</DeliveryShipText>
              <p>79 ₴</p>
            </SecondWrap>
          </DeliveryDiv>
        </DeliveryWrap>
      </DeliveryInfoWrap>

      <DeliveryInfoWrap>
        <LocationWrap>
            <FirstWrap>
            <MyWallet />
          <DeliveryTextSecond>
            <DeliverySpanSecond>Payment.</DeliverySpanSecond>Payment upon
            receipt of goods, Payment by card in the branch, Google Pay, Online
            with a card, Cashless for legal entities, Pay online with the
            "Baby's package" social card, Cashless for individuals, Apple Pay,
            Pay online with the "eSupport" card, Visa, Mastercard
          </DeliveryTextSecond>
            </FirstWrap>

        </LocationWrap>
        <LocationWrap>
            <FirstWrap>
            <GarantShield style={style} />
          <DeliveryTextSecond>
            <DeliverySpanSecond>Guarantee.</DeliverySpanSecond>
            12 months. Exchange/Return of goods within 14 days
          </DeliveryTextSecond>
            </FirstWrap>

        </LocationWrap>
      </DeliveryInfoWrap>
    </ButtonsBuyWrap>
  );
};
