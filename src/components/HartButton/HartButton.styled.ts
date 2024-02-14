import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const NotActiveIcon = styled.div`
  width: 36px;
  height: 36px;
  padding: 6px;
  background-color: transparent;
  border-radius: 8px;
`;

export const ActiveIcon = styled.div`
  width: 36px;
  height: 36px;
  padding: 6px;
  background-color: ${(propps) => propps.theme.TritiaryLightestExoticPink};
  border-radius: 8px;
`;

export const HartIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(propps) => propps.theme.SecondaryExoticPink};
`;
