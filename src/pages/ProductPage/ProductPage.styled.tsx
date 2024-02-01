import styled from "styled-components";
import { NavLink, LinkProps } from "react-router-dom";

export const ProductTitle = styled.h1`
  color: ${(props) => props.theme.PrimaryBlack};
  font-size: 32px;
  font-weight: 500;
  line-height: calc(40 / 32);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 60px;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 36px;
`;

export const NavItem = styled.li``;

export const NavLinkStyled = styled(NavLink)<LinkProps>`
  color: #69657b;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: calc(26 / 20);
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: ${(props) => props.theme.PrimaryBrightPurple};
  }

  &.active {
    color: ${(props) => props.theme.PrimaryBrightPurple};
    text-decoration: underline;
  }
`;
