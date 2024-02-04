import styled from "styled-components";

export const ButtonsBuyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BtnWrap = styled.div`
  width: 540px;
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
  transition: background-color 250ms ${(propps) => propps.theme.animation.cubicBezier};

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
  transition: background-color 250ms ${(propps) => propps.theme.animation.cubicBezier},
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
