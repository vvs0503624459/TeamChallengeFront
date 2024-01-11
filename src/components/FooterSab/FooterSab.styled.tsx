import styled from "styled-components";

import { Field } from "formik";
import transition from "../../utils/transition";

export const SubDiv = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightestGray};
`;

export const SubTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.TritiaryLightestGray};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 130% */
`;

export const SubText = styled.p`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const SubForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SubInput = styled(Field)`
display: flex;
// width: 280px;
padding: 13px 16px;
align-items: center;
gap: 10px;
border-radius: 12px;
border: 1px solid ${({ theme }) => theme.TritiaryLightestGray};

transition:
border-color ${transition};


// &:hover,
// &:focus {
// color: ${({ theme }) => theme.modalText};
// background-color: ${({ theme }) => theme.modalBg};
// border: 1px solid ${({ theme }) => theme.modalBtnBorderHover};
// }

`;

export const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.PrimaryBrightPurple};

  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */

  transition: background-color ${transition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.SecondaryDarkPurple};
  }
`;
