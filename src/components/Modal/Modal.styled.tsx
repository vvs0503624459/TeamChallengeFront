import { Box } from "@mui/material";
import styled from "styled-components";
// import transition from '../../utils/transition';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: var(--Primary-white, #fff);
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 415px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  padding: 0;
  border: none;
  color: #69657b;
  //   transition: transform;

  //   &:hover,
  //   &:focus {
  //     transform: scale(1.25);
  //   }
`;
