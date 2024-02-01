import styled from "styled-components";
import { Link } from "react-router-dom";


export const CardItem = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};
  gap: 16px;
`;

export const CardDiv = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const CardDivHeader = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const CardDivFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainProdImageDiv = styled.div`
  // position: relative;
`;

export const MainProdIMG = styled.img`
  display: block;
width: 132px;
  height: 164px;
  border-radius: 14px;
`;


export const TitleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
export const StarsDiv = styled.div`
  display: flex;
  gap: 8px;
  
`;
export const Comments = styled.p`
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;
export const Price = styled.p`
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: line-through;
`;

export const DiscountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DiscountDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Discountprice = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 26px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Deal = styled.p`
  padding: 4px 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.SecondaryExoticPink};
  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
`;
export const MainProdBtnDiv = styled.div`
  position: absolute;
  top: -4%;
  left: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
export const MainProdBtn = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  background: ${({ theme }) => theme.PrimaryWhite};
  border-radius: 8px;
  border: none;
`;