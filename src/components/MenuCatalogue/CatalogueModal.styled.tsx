import styled from "styled-components";
// import transition from "../../utils/transition";

export const CatalogueList = styled.ul`
  width: 861px;
  display: flex;
  column-gap: 40px;
  row-gap: 28px;
  flex-direction: row;
  flex-wrap: wrap;
  //   &:nth-child(3) {
  //     background: red;
  //   }
  //   &:nth-last-child(3) {
  //     flex-direction: column;
  //     flex-wrap: wrap;
  //   }
`;

export const CatalogueBrandTitle = styled.h4`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.PrimaryBrightPurple};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

export const CatalogueBrandText = styled.li`
  // width: 180px;
  width: 140px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const CatalogueBrandButton = styled.button`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.PrimaryBrightPurple};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;
