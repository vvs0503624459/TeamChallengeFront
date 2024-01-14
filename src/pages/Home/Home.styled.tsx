import styled from "styled-components";

export const GarantList = styled.ul`
  display: flex;
  background: ${({ theme }) => theme.TritiaryLightestGray};
  justify-content: center;
  gap: 20px;
  padding: 25px 20px;
`;

export const GarantItem = styled.li`
  width: 270px;
  //   height: 65px;
  display: flex;
  justify-content: center;
  gap: 10px;

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;

export const GarantTitle = styled.h4`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 157.143% */

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;

export const GarantText = styled.p`
  width: 236px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;
