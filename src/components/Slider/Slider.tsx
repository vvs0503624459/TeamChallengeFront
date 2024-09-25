import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import { SliderRight, SliderLeft } from "../../assets/Icons";
import SliderOne from "../../assets/slider1.png";
import SliderTwo from "../../assets/slider2.png";
import SliderTree from "../../assets/slider3.png";
// import slider from "../../data/slidernews.json";
import {
  SliderContainer,
  SliderItem,
  SliderImg,
  SliderTextDiv,
  SliderTitle,
  SliderDiscText,
  SliderPriceText,
  SliderPriceButton,
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
          <SliderTextDiv>
            <SliderTitle>Samsung Galaxy Fold5</SliderTitle>
            <SliderDiscText>78 999 ₴</SliderDiscText>
            <SliderPriceText>72 699 ₴</SliderPriceText>
            <SliderPriceButton>-8%</SliderPriceButton>
          </SliderTextDiv>

          <SliderImg src={SliderOne} />
          <ButtonLeft>
            <SliderLeft />
          </ButtonLeft>
          <ButtonRight>
            <SliderRight />
          </ButtonRight>
        </SliderItem>
        <SliderItem>
          <SliderTextDiv>
            <SliderTitle>Samsung Galaxy Gold6</SliderTitle>
            <SliderDiscText>78 999 ₴</SliderDiscText>
            <SliderPriceText>72 699 ₴</SliderPriceText>
            <SliderPriceButton>-8%</SliderPriceButton>
          </SliderTextDiv>

          <SliderImg src={SliderTwo} />
          <ButtonLeft>
            <SliderLeft />
          </ButtonLeft>
          <ButtonRight>
            <SliderRight />
          </ButtonRight>
        </SliderItem>
        <SliderItem>
          <SliderTextDiv>
            <SliderTitle>Samsung Galaxy Black8</SliderTitle>
            <SliderDiscText>78 999 ₴</SliderDiscText>
            <SliderPriceText>72 699 ₴</SliderPriceText>
            <SliderPriceButton>-8%</SliderPriceButton>
          </SliderTextDiv>

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
