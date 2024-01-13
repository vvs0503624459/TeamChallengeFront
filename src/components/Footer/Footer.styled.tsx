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
