// import styled from "styled-components";

import { Form, Field } from "formik";
import styled, { css } from "styled-components";


// export const PersonalInfoDiv = styled.div`
//   // display: flex;
//   padding-bottom: 24px;
//   width: 100%;
//   border-bottom: 1px solid var(--Tritiary-light-gray, #e0e4f0);
//   // align-items: center;
//   // justify-content: space-between;
// `;

export const PersonalInfoContactDiv = styled.div`
  padding-top: 24px;
  width: 100%;
`;


export const PersonalInfoNameButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
  color: var(--Secondary-exotic-pink, #e8467c);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const PersonalContactList = styled.ul``;

export const PersonalContactItemOne = styled.li`
  padding-bottom: 12px;
  border-bottom: 1px solid var(--Tritiary-light-gray, #e0e4f0);
  display: flex;
  justify-content: space-between;
`;
export const PersonalContactItemTwo = styled.li`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
`;
//=========================

export const SignWrapper = styled.div``;

export const AuthForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  //   @media screen and (min-width: 768px) {
  //     width: 400px;
  //   }
  //   @media screen and (min-width: 1440px) {
  //   }
`;

export const InputsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  display: flex;
  width: 162px;
  height: 42px;
  // padding: 3px 85px 3px 16px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--Tritiary-purple-gray, #69657b);
  outline: none;

  color: var(--Tritiary-purple-gray, #69657b);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 180% */

  &:focus,
  &:hover {
    border: 1px solid #5826da;
    transition: border, background-color;
  }
  &:focus {
    color: #a7aab5;
  }

  &::placeholder {
    color: var(--Tritiary-purple-gray, #69657b);
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

export const CheckButtonList = styled.ul`
  display: flex;
  gap: 16px;
`;

export const CheckButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 10px 9px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: none;
  background: var(--Tritiary-light-gray, #e0e4f0);
`;
