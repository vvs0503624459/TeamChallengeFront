// import styled from "styled-components";

import { Form, Field } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import transition from '../../utils/transition';

import styled, { css } from "styled-components";

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 400px;
  padding: 40px;
  border-radius: 0px 12px;
  border: 1px solid #e0e4f0;

  //   @media screen and (min-width: 768px) {
  //     width: 400px;
  //   }
  //   @media screen and (min-width: 1440px) {
  //   }
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  width: 100%;
  background-color: transparent;
  padding: 10px 0px 10px 10px;
  min-height: 20px;
  color: #1e1d21;
  border: 1px solid #a7aab5;
  font-size: 14px;
  border-radius: 10px;
  line-height: 1.28;
  outline: none;

  &:focus,
  &:hover {
    border: 1px solid #5826da;

    transition: border, background-color;
  }
  &:focus {
    color: #a7aab5;
  }

  &::placeholder {
    color: #5826da;
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

export const Button = styled.button`
  padding: 18px 25px;
  background: #ccb9f2;
  border-radius: 42px;
  line-height: 1.28;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.286;
  margin-bottom: 14px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border: none;
  &:focus,
  &:hover {
    background-color: #5826da;
    color: #f3f3f3;
    border: 1px solid rgba(243, 243, 243, 0.58);
    transition: border, background-color;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const TogglePasswordButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 13px;
  right: 0px;
  padding: 0;
`;

export const StyledDontShowPasswordIcon = styled(AiOutlineEye)`
  fill: #1e1d21;
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
  fill: #1e1d21;
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
  top: 13px;
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
  top: 13px;
  right: 24px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
