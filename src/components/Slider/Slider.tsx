import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import { SliderRight, SliderLeft } from "../IconComponents/IconsCatalogue";
import SliderOne from "../../assets/slider1.png";
import SliderTwo from "../../assets/slider2.png";
import SliderTree from "../../assets/slider3.png";
// import slider from "../../data/slidernews.json";
import {
  SliderContainer,
  SliderItem,
  SliderImg,
  SliderTitle,
  SliderP,
  ButtonLeft,
  ButtonRight,
} from "./Slider.styled";

const Slider = () => {
  return (
    <SliderContainer
      modules={[Navigation]}
      //  spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <div>
        <SliderItem>
          <SliderP>new</SliderP>
          <SliderTitle>Samsung Galaxy Fold5</SliderTitle>
          <SliderImg src={SliderOne} />
          <ButtonLeft>
            <SliderLeft />
          </ButtonLeft>
          <ButtonRight>
            <SliderRight />
          </ButtonRight>
        </SliderItem>
        <SliderItem>
          <SliderP>new</SliderP>
          <SliderTitle>Samsung Galaxy Gold6</SliderTitle>
          <SliderImg src={SliderTwo} />
          <ButtonLeft>
            <SliderLeft />
          </ButtonLeft>
          <ButtonRight>
            <SliderRight />
          </ButtonRight>
        </SliderItem>
        <SliderItem>
          <SliderP>new</SliderP>
          <SliderTitle>Samsung Galaxy Black8</SliderTitle>
          <SliderImg src={SliderTree} />
          <ButtonLeft>
            <SliderLeft />
          </ButtonLeft>
          <ButtonRight>
            <SliderRight />
          </ButtonRight>
        </SliderItem>
        {/* {slider.map(({ id, image, title }) => (
          <SliderItem key={id}>
            <SliderP>new</SliderP>
            <SliderTitle>{title}</SliderTitle>
            <SliderImg src={image} alt={title} />
            <ButtonLeft><SliderLeft /></ButtonLeft>
            <ButtonRight><SliderRight /></ButtonRight>
          </SliderItem>
        ))} */}
      </div>
    </SliderContainer>
  );
};

export default Slider;
