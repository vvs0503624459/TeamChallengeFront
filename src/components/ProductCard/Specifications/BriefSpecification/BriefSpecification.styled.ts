import styled from "styled-components";

export const BriefWrap = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid ${(propps) => propps.theme.TritiaryLightGray};
`;

export const BriefContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

export const BriefImage = styled.img`
  width: 131px;
  height: 164px;
  border-radius: 14px;
`;

export const BriefTitle = styled.p`
  color: ${(propps) => propps.theme.PrimaryBlack};
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
`;

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
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0;
    text-align: left;
  }

  & :last-child {
    color: ${(propps) => propps.theme.PrimaryBlack};
    font-weight: 600;
  }
`;
