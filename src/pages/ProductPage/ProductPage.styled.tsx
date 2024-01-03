import styled from "styled-components";
import { Link, LinkProps } from "react-router-dom";

export const NavList = styled.ul`
display: flex;
gap: 60px;
align-items: center;
padding-top: 32px;
padding-bottom: 36px;

`;

export const NavItem = styled.li`
`;

export const NavLink = styled(Link)<LinkProps>`
  color: #69657b;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;

  &:hover {
    color: #5826da;
  }

  &::active {
    color: #5826da;
  }
`;

