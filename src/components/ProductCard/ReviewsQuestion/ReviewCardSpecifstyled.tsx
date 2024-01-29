import styled from "styled-components";
export const GridWrap = styled.div`
  display: grid;
grid-template-columns: repeat(2, 1fr);

    border-radius: 12px;
border: 1px solid var(--Tritiary-light-gray, #E0E4F0);
grid-template-rows: auto;
row-gap: 60px;
padding: 20px;
 &  p:not(:last-child) {
  padding-bottom: 4px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--Tritiary-light-gray, #E0E4F0);}
    grid-auto-rows: minmax(min-content, max-content);
    /* align-items: start; */
`;
export const FirstColumn = styled.p`
color: var(--Tritiary-purple-gray, #69657B);
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px; /* 150% */
/* overflow-wrap: break-word; */
`;
export const SecondColumn = styled.p`
color: var(--Primary-black, #1E1D21);
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
/* overflow-wrap: break-word; */
`;