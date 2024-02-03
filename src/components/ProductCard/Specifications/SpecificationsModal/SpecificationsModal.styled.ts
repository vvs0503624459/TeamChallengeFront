import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  overflow-y: hidden;
  z-index: 1;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  right: 35px;
  transform: translate(0, -50%);
  width: 306px;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.TritiaryPurpleGray};
  z-index: 100;

  & p {
    color: ${(props) => props.theme.PrimaryWhite};
    font-size: 14px;
    font-weight: 400;
    line-height: calc(16 / 14);
    border: none;
  }

  & svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    fill: ${(props) => props.theme.TritiaryPurpleGray};
  }
`;
