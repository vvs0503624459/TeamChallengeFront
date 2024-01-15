import styled from "styled-components";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";


export const SliderContainer = styled(Swiper)`
  .swiper-button-prev {
    position: absolute;
    top: 50%;
  }
  .swiper-button-next {
    position: absolute;
    top: 50%;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 15px;
    color: transparent;
  }


  // width: 899px;
    width: 100vw;
  border-radius: 12px;
`;

export const SliderItem = styled(SwiperSlide)`
  position: relative;
  // width: 760px;

`;

export const CardList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const CardItem = styled.li`
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.TritiaryLightGray};
`;

export const CardDiv = styled.div`
  padding: 20px;
`;

export const DIVIMG = styled.div`
  position: relative;
`;

export const IMG = styled.img`
  width: 160px;
  height: 199px;
  border-radius: 14px;
`;
export const BUTTONDIV = styled.div`
  position: absolute;
  top: -4%;
  left: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
export const TitleLink = styled(Link)`
  text-decoration: none;
  margin-top: 12px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
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
  gap: 38px;
`;

export const DiscountDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Discountprice = styled.p`
  color: ${({ theme }) => theme.PrimaryBlack};
  font-family: Inter;
  font-size: 20px;
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
