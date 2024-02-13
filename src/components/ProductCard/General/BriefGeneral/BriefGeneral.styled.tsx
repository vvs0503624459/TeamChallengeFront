import styled from "styled-components";

export const BriefWrap = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  gap: 32px;
  width: 520px;
  height: 558px;
`;

export const BriefImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 88px;
`;
export const BriefContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  gap: 20px;
`;

export const BriefImageList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;
export const BriefImageItem = styled.li`
  display: flex;
  align-items: center;
  width: 48px;
  height: 60px;
  border-radius: 12px;
  border: 1px solid ${(propps) => propps.theme.TritiaryLightGray};

  &.active {
    // border: 1px solid ${(props) => props.theme.PrimaryBrightPurple};
     border: 1px solid #5826da;
  }


`;
export const BriefImage = styled.img`
  width: 44px;
  height: 49px;
  border-radius: 14px;
`;
export const BriefImageBigDiv = styled.div`
  width: 492px;
  height: 436px;
  border-radius: 14px;
  border: 1px solid ${(propps) => propps.theme.TritiaryLightGray};
`;

export const BriefImageBig = styled.img``;

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
