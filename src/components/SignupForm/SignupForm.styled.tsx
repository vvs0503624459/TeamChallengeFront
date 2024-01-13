// import styled from "styled-components";

import { Form, Field } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import transition from "../../utils/transition";

import styled, { css } from "styled-components";

export const SignWrapper = styled.div``;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;

  //   @media screen and (min-width: 768px) {
  //     width: 400px;
  //   }
  //   @media screen and (min-width: 1440px) {
  //   }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 415px;
`;

export const InputWrap = styled.div`
  position: relative;
  width: 383px;
`;

export const Input = styled(Field)`
  width: 100%;
  display: flex;
  height: 42px;
  padding: 9px 16px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryPurpleGray};
  outline: none;

  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  transition: border-color ${transition};

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.PrimaryBrightPurple};
  }
  &:focus {
    color: #a7aab5;
  }

  &::placeholder {
    color: ${({ theme }) => theme.TritiaryPurpleGray};
  }

  ${({ error }) =>
    error === "true" &&
    css`
      border: 1px solid red;
    `}
  ${({ success }) =>
    success === "true" &&
    css`
      border: 1px solid green;
    `}
`;

export const PasswordButton = styled.button`
  margin-top: 10px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: right;
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
    background: ${({ theme }) => theme.SecondaryDarkPurple};
  }

  @media screen and (min-width: 768px) {
  }
`;

export const TogglePasswordButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 20px;
  right: 0px;
  padding: 0;
`;

export const StyledDontShowPasswordIcon = styled(AiOutlineEye)`
  fill: ${({ theme }) => theme.PrimaryBlack};
  width: 18px;
  height: 18px;
  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const StyledShowPasswordIcon = styled(AiOutlineEyeInvisible)`
  fill: ${({ theme }) => theme.PrimaryBlack};
  width: 18px;
  height: 18px;

  @media screen and (min-width: 375px) {
    left: 290px;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const ErrorBorder = styled.div`
  border: 1px solid red;
`;

export const SuccessBorder = styled.div`
  border: 1ch solid green;
`;
export const ErrorIcon = styled(AiOutlineExclamationCircle)`
  color: red;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: green;
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const SignDecorText = styled.p`
  color: ${({ theme }) => theme.Grey};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  text-align: center;

  // &:after {
  //   content: " 🦄";
  // }
  &:before {
    content: " ";
    width: 150px;
    height: 0.5px;
    background: ${({ theme }) => theme.Grey};
  }
`;

export const SignText = styled.p`
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  text-align: center;
`;
