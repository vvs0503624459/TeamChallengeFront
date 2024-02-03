import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  bottom: 4px;
  right: 0;
  border: none;
  background-color: transparent;

  & svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.PrimaryBlack};
  }
`;
