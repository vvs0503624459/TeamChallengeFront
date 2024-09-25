import {
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
} from "./DeliveryInfo.styled";

import {
  IconRight,
  GeneralLocation,
  GeneralOfice,
  GarantShield,
  GarantCar,
  MyWallet,
} from "@/assets/Icons";

export const DeliveryInfo = () => {
  const style = {
    fill: "#1e1d21",
  };
  return (
    <>
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
              receipt of goods, Payment by card in the branch, Google Pay,
              Online with a card, Cashless for legal entities, Pay online with
              the "Baby's package" social card, Cashless for individuals, Apple
              Pay, Pay online with the "eSupport" card, Visa, Mastercard
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
    </>
  );
};
