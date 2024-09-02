import styled from "styled-components";

export const PersonalInfoWrap = styled.div`
  display: flex;
  padding: 24px 40px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid var(--Tritiary-light-gray, #e0e4f0);
  width: 846px;
`;

export const PersonalContactBorder = styled.div`
  padding-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid var(--Tritiary-light-gray, #e0e4f0);
`;

export const PersonalContactItem = styled.li`
  flex-direction: column;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--Tritiary-light-gray, #e0e4f0);
  display: flex;
  justify-content: space-between;
`;

export const PersonalInfoLabel = styled.p`
  margin-bottom: 4px;
  color: var(--Tritiary-purple-gray, #69657b);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

export const PersonalInfoNameTitle = styled.h4`
  margin-bottom: 4px;
  color: var(--Primary-black, #1e1d21);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;