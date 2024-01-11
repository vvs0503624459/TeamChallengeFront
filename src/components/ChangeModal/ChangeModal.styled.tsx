import styled from "styled-components";
import transition from "../../utils/transition";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChangeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  transition: color ${transition};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.PrimaryBrightPurple};
  }
`;

export const Button = styled.button`
  margin-bottom: 30px;
  margin-top: 30px;
  display: flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.PrimaryBrightPurple};
  border: none;

  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */

  transition: background-color ${transition};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.SecondaryDarkPurple};
  }

  @media screen and (min-width: 768px) {
  }
`;
