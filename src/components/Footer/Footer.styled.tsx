import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.footer`
  padding: 100px 0px 20px 0px;
  background: ${({ theme }) => theme.PrimaryBlack};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterText = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 176px;
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 130% */
`;

export const FooterIconList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const FooterListWrapper = styled.ul`
  display: flex;
  gap: 64px;
  flex-direction: row;
  justify-content: center;
`;

export const FooterListTitles = styled.h4`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.TritiaryLightGray};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
`;

export const FooterItem = styled.li`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const PolicyWrapper = styled.div`
  display: flex;
  /* gap: 60px; */
  margin-top: 60px;
  justify-content: space-between;
`;

export const PolicyText = styled.p`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

export const PolicyList = styled.ul`
  display: flex;
  gap: 60px;
`;

export const PolicyItem = styled.li``;

export const PolicyLink = styled(NavLink)`
  color: ${({ theme }) => theme.TritiaryGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;


// import styled from "styled-components";

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
