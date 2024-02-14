import styled from "styled-components";

export const BriefPropertiesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  column-gap: 40px;
  row-gap: 24px;
`;

export const PropertyWrap = styled.div``;

export const Property = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 5px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: ${(propps) => propps.theme.TritiaryPurpleGray};
  }

  & p {
    color: ${(propps) => propps.theme.TritiaryPurpleGray};
    font-family: "InterRegular";
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    text-align: left;
  }

  & :last-child {
    color: ${(propps) => propps.theme.PrimaryBlack};
    font-family: "InterSemiBold";
  }
`;
