import iconsSprite from "@/assets/iconsSprite.svg";
import pumb from "@/assets/bank_pumb.png";
import abank from "@/assets/bank_abank.png";
import {
  BankWrap,
  BtnWrap,
  BuyToCredittBtn,
  ChevronRightIcon,
  IconsContainer,
  OnCreditPrice,
  OnCreditText,
} from "./BuyToCredit.styled";

export const BuyToCredit = () => {
  return (
    <BtnWrap>
      <div>
        <OnCreditText>On credit from</OnCreditText>
        <OnCreditPrice>
          {"8499".toLocaleString()} {"\u20B4"} / mon
        </OnCreditPrice>
      </div>
      <IconsContainer>
        <BankWrap>
          <img src={pumb} alt="Bank PUMB" />
          <p>3</p>
        </BankWrap>
        <BankWrap>
          <img src={abank} alt="Bank abank" />
          <p>4</p>
        </BankWrap>
        <ChevronRightIcon>
          <use href={iconsSprite + "#icon-chevron-right"}></use>
        </ChevronRightIcon>
        <BuyToCredittBtn type="button">
          <svg>
            <use href={iconsSprite + "#icon-coins"}></use>
          </svg>
          <p>Buy to Credit</p>
        </BuyToCredittBtn>
      </IconsContainer>
    </BtnWrap>
  );
};
