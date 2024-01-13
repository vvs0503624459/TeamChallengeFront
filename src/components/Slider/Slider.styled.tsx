import styled from "styled-components";
// import { Slide } from 'react-slideshow-image';
import { Swiper, SwiperSlide } from "swiper/react";
import transition from "../../utils/transition";

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

  background: linear-gradient(
    179.77deg,
    #5826da 6.06%,
    rgba(88, 38, 218, 0) 99.8%
  );
  width: 899px;
  //   width: 100vw;
  border-radius: 12px;
`;

export const SliderItem = styled(SwiperSlide)`
  position: relative;
  width: 760px;
`;

export const SliderImg = styled.img`
  position: absolute;
  top: 10%;
  left: 33%;
`;

export const SliderTextDiv = styled.div`
  padding-top: 108px;
  padding-left: 110px;
`;

export const SliderTitle = styled.h1`
  width: 225px;
  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
`;
export const SliderDiscText = styled.p`
  color: ${({ theme }) => theme.TritiaryLightGray};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  text-decoration-line: strikethrough;
`;

export const SliderPriceText = styled.p`
  color: ${({ theme }) => theme.PrimaryWhite};
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 130% */
`;

export const SliderPriceButton = styled.button`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.SecondaryExoticPink};
  color: ${({ theme }) => theme.PrimaryWhite};
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
`;
export const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 2%;
  background: ${({ theme }) => theme.TritiaryLightestGray};
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 8px;
  border: none;
  transition: background-color ${transition};
`;
export const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;
  background: ${({ theme }) => theme.TritiaryLightestGray};
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 8px;
  border: none;
  transition: background-color ${transition};
`;