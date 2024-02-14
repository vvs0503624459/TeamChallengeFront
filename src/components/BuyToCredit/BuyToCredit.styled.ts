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

export const OnCreditText = styled.p`
  color: ${(propps) => propps.theme.TritiaryPurpleGray};
  font-family: "InterMedium";
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;
`;

export const OnCreditPrice = styled.p`
  color: ${(propps) => propps.theme.PrimaryBlack};
  font-family: "InterMedium";
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;
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
    font-family: "InterSemiBold";
    font-size: 16px;
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
