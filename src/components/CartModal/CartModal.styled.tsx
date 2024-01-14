import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartListTop = styled.ul``;

export const CardItem = styled.li`
  width: 1160px;
  border-radius: 12px;
  border: 1px solid #e0e4f0;
`;

export const CardDiv = styled.div`
  padding: 20px;
  display: flex;
  gap: 240px;
`;

export const DIVIMG = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const CartIMG = styled.img`
  width: 100px;
  height: 124px;
  flex-shrink: 0;
  border-radius: 10px;
  // background: url(<path-to-image>), lightgray -13.669px -1.425px / 127.338% 101.724% no-repeat;
`;

export const CartTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleLink = styled(Link)`
  width: 600px;
  text-decoration: none;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const StockButton = styled.button`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  align-self: self-start;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.SecondaryToxicGreen};
  color: ${({ theme }) => theme.PrimaryWhite};
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

export const CartBUTTONDIV = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const BUTTON = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  background: ${({ theme }) => theme.PrimaryWhite};
  border-radius: 8px;
  border: none;
`;

export const StarsDiv = styled.div`
  display: flex;
  gap: 8px;
`;
export const Comments = styled.p`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Price = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 130% */
  text-decoration-line: strikethrough;
  text-decoration: line-through;
`;

export const DiscountContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 22px;
  flex-direction: column;
`;

export const DiscountDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const PlusButtonList = styled.ul`
  display: flex;
  align-items: center;
  gap: 48px;
`;
export const Discountprice = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};

  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 125% */
`;
export const Deal = styled.p`
  display: flex;
  width: 48px;
  height: 26px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.SecondaryExoticPink};
  color: ${({ theme }) => theme.PrimaryWhite};
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;

export const PlusButton = styled.button`
  // display: flex;
  width: 48px;
  padding: 5px 10px;
  // justify-content: center;
  // align-items: center;
  // gap: 10px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};
`;

// CartCenterInfo
export const CartListCenter = styled.ul`
  margin: 24px 0;
`;

export const CardItemCenter = styled.li`
  width: 1160px;
  display: flex;
  gap: 18px;
`;

export const CartWrapperInfoCenter = styled.div`
  width: 681px;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  gap: 24px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};
`;
export const CartTextDivCenter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTextCenter = styled.p`
  color: ${({ theme }) => theme.TritiaryPurpleGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;
export const CartTitleCenter = styled.h4`
  width: 149px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 127.273% */
`;

export const CartButtonListCenter = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const CartButtonCenter = styled.button`
  display: flex;
  padding: 14px 9px;
  align-items: flex-start;
  width: 48px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};

  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;
export const CartButtonBuyCenter = styled.button`
  display: flex;
  width: 196px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.PrimaryBrightPurple};
  background: ${({ theme }) => theme.PrimaryWhite};

  color: ${({ theme }) => theme.PrimaryBrightPurple};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
`;

export const CartWrapperChekCenter = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  justify-content: center;
`;

export const CartTitleChekCenter = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 48px; /* 120% */
`;
export const CartButtonChekCenter = styled.button`
  display: flex;
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
`;
