import styled from "styled-components";

export const ButtonsBuyWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const BtnWrap = styled.div`
  width: 540px;
  height: 96px;
  align-content: space-between;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: end;
  border-radius: 12px;
  border: 1px solid ${(propps) => propps.theme.TritiaryLightGray};
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 17px;
`;

export const OldPrice = styled.p`
  height: 20px;
  color: ${(propps) => propps.theme.TritiaryPurpleGray};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  align-items: center;
  text-decoration-line: line-through;
`;

export const Price = styled.p`
  height: 36px;
  color: ${(propps) => propps.theme.PrimaryBlack};
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0;
  text-align: left;
`;

export const OnCreditText = styled.p`
  color: ${(propps) => propps.theme.TritiaryPurpleGray};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`;

export const OnCreditPrice = styled.p`
  color: ${(propps) => propps.theme.PrimaryBlack};
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
`;

export const Discount = styled.div`
  width: 48px;
  padding: 4px 8px;
  margin: 5px 0;
  border-radius: 8px;
  background-color: ${(propps) => propps.theme.SecondaryExoticPink};

  & p {
    color: ${(propps) => propps.theme.PrimaryWhite};
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;
    text-align: center;
  }
`;

export const AddToCartBtn = styled.button`
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: ${(propps) => propps.theme.PrimaryBrightPurple};
  border-color: transparent;
  margin-left: 26px;
  transition: background-color 250ms
    ${(propps) => propps.theme.animation.cubicBezier};

  & p {
    color: ${(propps) => propps.theme.PrimaryWhite};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(24 / 16);
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: ${(propps) => propps.theme.PrimaryWhite};
  }

  &:hover,
  &:focus {
    background-color: ${(propps) => propps.theme.SecondaryDarkPurple};
  }
`;

export const BuyToCredittBtn = styled.button`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid ${(propps) => propps.theme.PrimaryBrightPurple};
  background-color: ${(propps) => propps.theme.PrimaryWhite};
  transition: background-color 250ms
      ${(propps) => propps.theme.animation.cubicBezier},
    border-color 250ms ${(propps) => propps.theme.animation.cubicBezier};

  & p {
    color: ${(propps) => propps.theme.PrimaryBrightPurple};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: calc(24 / 16);
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: ${(propps) => propps.theme.PrimaryBrightPurple};
  }

  &:hover,
  &:focus {
    color: ${(propps) => propps.theme.SecondaryDarkPurple};
    background-color: ${(propps) => propps.theme.TritiaryLightestGray};
    border-color: transparent;
  }
`;

export const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const HartButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const HartIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(propps) => propps.theme.SecondaryExoticPink};
`;

export const CompareIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(propps) => propps.theme.SecondaryCalmOrange};
`;

export const ChevronRightIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(propps) => propps.theme.TritiaryPurpleGray};
  margin-left: -8px;
  margin-right: 7px;
`;

export const BankWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  padding: 14px 9px;
  border-radius: 12px;
  border: 1px solid ${(propps) => propps.theme.TritiaryLightGray};

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export const DeliveryInfoWrap = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 1px;
  border-radius: 12px;
  border: 1px solid #e0e4f0;
  flex-direction: column;
`;

export const LocationWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #e0e4f0;
`;

export const FirstWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const DeliveryShipSpan = styled.span`
  margin-left: 12px;
  color: #1e1d21;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LocationBtnRight = styled.button`
width: 36px;
height: 36px;
display: flex;
padding: 6px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 8px;
border: none;
background: #F2F4FA;
// background: ${({ theme }) => theme.SecondaryExoticPink};

`;

export const DeliveryWrap = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  gap: 12px;
`;

export const DeliveryDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SecondWrap = styled.div`
  display: flex;
  align-items: center;
  width: 344px;
  justify-content: space-between;
`;
export const DeliveryText = styled.p`
  width: 228px;
  color: #69657b;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const DeliveryShipText = styled.p`
  color: #1e1d21;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const DeliveryTextSecond = styled.p`
  width: 584px;
  color: #69657b;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;

export const DeliverySpanSecond = styled.span`
  color: #1e1d21;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;
