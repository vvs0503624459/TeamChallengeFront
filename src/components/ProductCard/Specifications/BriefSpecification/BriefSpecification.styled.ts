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
  font-family: "InterMedium";
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
`;
