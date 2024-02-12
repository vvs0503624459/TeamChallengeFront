import styled from "styled-components";
export const GridBox = styled.div`
  display: flex;
  flex-direction:column;
  gap: 24px;
`;
export const GridContainerTitle = styled.div`
color: var(--Primary-black, #1E1D21);
font-family: Inter;
font-size: 24px;
font-weight: 500;
line-height: 32px; /* 133.333% */
`;
export const GridContainer = styled.div`
  border-radius: 12px;
  border: 1px solid var(--Tritiary-light-gray, #E0E4F0);
  padding: 20px;
 &  div:not(:last-child) {
  padding-bottom: 4px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--Tritiary-light-gray, #E0E4F0);}
`;
export const GridWrap = styled.div`
  display: flex;
  gap: 12px;
`;
export const FirstColumn = styled.p`
color: var(--Tritiary-purple-gray, #69657B);
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px; /* 150% */
width: calc(62% - 20px);
/* display: inline-block; */
/* overflow-wrap: break-word; */
`;
export const SecondColumn = styled.p`
color: var(--Primary-black, #1E1D21);
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px; /* 150% */
/* overflow-wrap: break-word; */
width: calc(38% - 20px);
`;
export const GridContainerBtn = styled.button`
color: var(--Primary-bright-purple, #5826DA);
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 24px; /* 150% */
display: flex;
padding: 12px 24px;
justify-content: flex-start;
align-items: center;
gap: 10px;
border-radius: 12px;
border: 2px solid var(--Primary-bright-purple, #5826DA);
background: var(--Primary-white, #FFF);
max-width: fit-content;
`;