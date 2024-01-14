import styled from "styled-components";

export const BrandListList = styled.ul`
  display: flex;
  background: ${({ theme }) => theme.TritiaryLightestGray};
  justify-content: center;
  align-items: center;
`;

export const BrandListItem = styled.li`
  width: 177px;
  height: 65px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 48px;
  padding-left: 48px;
  padding: 25px, 48px, 25px, 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  //   @media screen and (min-width: 768px) {

  //   }

  //   @media screen and (min-width: 1440px) {

  //   }
`;