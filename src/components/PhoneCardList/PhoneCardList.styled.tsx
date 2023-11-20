import styled from 'styled-components';

export const CardList = styled.ul`

  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const CardItem = styled.li`
// width: 240px;
// height: 420px;

border-radius: 12px;
border: 1px solid #E0E4F0;

`;

export const CardDiv = styled.div`
padding: 20px;

`;


export const IMG = styled.img`
width: 160px;
height: 199px;
border-radius: 14px;

`;

export const Title = styled.h1`
margin-top: 12px;
margin-bottom: 4px;
color: #1E1D21;
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
`;

export const Comments = styled.p`
margin-bottom: 16px;
color: #69657B;
font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

`;
export const Price = styled.p`
color: #69657B;
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

`;

export const DiscountDiv = styled.div`
display: flex;
align-items: center;
gap: 8px;

`;
export const Discountprice = styled.p`
color: #1E1D21;
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 26px;
letter-spacing: 0em;
text-align: left;

`;
export const Deal = styled.p`
padding-top: 4px;
padding-left: 8px;
padding-bottom: 4px;
padding-right: 8px;
// padding: 4px, 8px, 4px, 8px;
border-radius: 8px;
 background: #E8467C;
coolor: #FFFFFF;
font-family: Inter;
font-size: 12px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0em;
text-align: center;

`;
