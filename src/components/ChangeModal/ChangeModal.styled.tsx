import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChangeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: var(--Primary-black, #1e1d21);

  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;

export const Button = styled.button`
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--Primary-bright-purple, #5826da);
  border: none;

  color: var(--Primary-white, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */

  &:focus,
  &:hover {
    background-color: #5826da;
    color: #f3f3f3;
    border: 1px solid rgba(243, 243, 243, 0.58);
    transition: border, background-color;
  }

  @media screen and (min-width: 768px) {
  }
`;
