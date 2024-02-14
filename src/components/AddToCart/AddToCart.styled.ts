import styled from "styled-components";

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
  font-family: "InterMedium";
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
  align-items: center;
  text-decoration-line: line-through;
`;

export const Price = styled.p`
  height: 36px;
  color: ${(propps) => propps.theme.PrimaryBlack};
  font-family: "InterMedium";
  font-size: 28px;
  line-height: 36px;
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
    font-family: "InterRegular";
    font-size: 12px;
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
    font-family: "InterSemiBold";
    font-size: 16px;
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

export const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
