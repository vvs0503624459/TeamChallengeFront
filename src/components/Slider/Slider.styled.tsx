import styled from "styled-components";
// import { Slide } from 'react-slideshow-image';
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

export const SliderTitle = styled.h1`
  padding-left: 110px;
  width: 225px;
  color: #ffffff;
  font-family: Inter;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SliderP = styled.p`
  padding-top: 108px;
  padding-left: 110px;
  color: #ffffff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  text-transform: uppercase;
`;
export const ButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 2%;
  background: #f9fafe;
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 8px;
  border: none;
`;
export const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 2%;
  background: #f9fafe;
  width: 36px;
  height: 36px;
  padding: 6px;
  border-radius: 8px;
  border: none;
`;
