import PageTitle from "../../components/PageTitle/PageTitle";
import { Section } from "../../components/Container/Container.styled";

import Offer1 from "../../assets/offer-1.png";
import Offer2 from "../../assets/offer-2.png";
import Offer3 from "../../assets/offer-3.png";
import Offer4 from "../../assets/offer-4.png";

import {
  CurrentOfferList,
  CurrentOfferItem,
  CurrentOfferDiv,
  CurrentOfferTitle,
  CurrentOfferPrice,
  CurrentOfferDisc,
  CurrentOfferText,
  // CurrentOfferImgDiv,
  // CurrentOfferImg
} from "./CurrentOffer.styled";

const CurrentOffer = () => {
  return (
    <Section>
      <PageTitle title={"Current offers"} />
      <CurrentOfferList>
        <CurrentOfferItem color={"#92c1e9"}>
          <CurrentOfferDiv>
            <div>
              <CurrentOfferTitle>Product of the day</CurrentOfferTitle>
              <CurrentOfferPrice>7 599 ₴</CurrentOfferPrice>
              <CurrentOfferDisc>10 599 ₴</CurrentOfferDisc>
            </div>

            <CurrentOfferText>
              Marshall Stockwell II Portable Speaker Black
            </CurrentOfferText>
          </CurrentOfferDiv>
          <>
            <img src={Offer1} width="90" height="124" />
          </>
        </CurrentOfferItem>
        <CurrentOfferItem color={"#FFF66A"}>
          <CurrentOfferDiv>
            <div>
              <CurrentOfferTitle>Sales</CurrentOfferTitle>
              <CurrentOfferPrice>from 990 ₴</CurrentOfferPrice>
            </div>

            <CurrentOfferText>Smart Watch GOGPS ME K11</CurrentOfferText>
          </CurrentOfferDiv>

          <img src={Offer2} width="110" height="102" />
        </CurrentOfferItem>
        <CurrentOfferItem color={"#F2994A"}>
          <CurrentOfferDiv>
            <div>
              <CurrentOfferTitle>Discounts</CurrentOfferTitle>
              <CurrentOfferPrice>20 990 ₴</CurrentOfferPrice>
              <CurrentOfferDisc>27 990 ₴</CurrentOfferDisc>
            </div>

            <CurrentOfferText>Laptop HP 15</CurrentOfferText>
          </CurrentOfferDiv>

          <img src={Offer3} width="113" height="95" />
        </CurrentOfferItem>
        <CurrentOfferItem color={"#CBC2F2"}>
          <CurrentOfferDiv>
            <div>
              <CurrentOfferTitle>Top offers</CurrentOfferTitle>
              <CurrentOfferPrice>from 1 599 ₴</CurrentOfferPrice>
            </div>

            <CurrentOfferText>
              ZTE BLADE L9 1/32GB Dual Sim Gray
            </CurrentOfferText>
          </CurrentOfferDiv>

          <img src={Offer4} width="78" height="102" />
        </CurrentOfferItem>
      </CurrentOfferList>
    </Section>
  );
};
export default CurrentOffer;
