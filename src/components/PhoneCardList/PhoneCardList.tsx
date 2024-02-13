import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleLike } from "@/redux/products/likeReducer";
import { addProductToCart } from "@/redux/products/cartReducer";
import { DevicesState } from "../../redux/types/initialEntity";
// import phone from "../../data/phone.json";

import StarRating from "../StarRating/StarRating";
import CartModal from "../CartModal/CartModal";
import { Like, Compare, Cart, NotLike } from "../IconComponents/IconsCatalogue";
import {
  // SliderContainer,
  // SliderItem,
  CardList,
  CardItem,
  MainDevisImageDiv,
  MainDevisIMG,
  MainDevisBtnDiv,
  MainDevisBtn,
  CardDiv,
  TitleLink,
  StarsDiv,
  // Comments,
  Price,
  DiscountContainer,
  DiscountDiv,
  Discountprice,
  Deal,
} from "./PhoneCardList.styled";

import noImage from "@/assets/no-image.png";
const style = {
  fill: "#5826da",
};

type PhoneCardListProps = {
  devices: DevicesState[];
};

const PhoneCardList: React.FC<PhoneCardListProps> = ({ devices }) => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const isLiked = useAppSelector((state) => state.productsLikeState ?? false);
  const dispatch = useAppDispatch();

  const handleToggleCartModal = (id: string) => {
    dispatch(addProductToCart({ id }));
    setIsOpenCartModal(true);
  };

  const newArray = devices.slice(0, 5);

  return (
    <>
      <CardList>
        {newArray.length > 0 &&
          newArray.map(
            ({ id, title, mainPhotoUri, price, discount, review }) => (
              <CardItem key={id}>
                <CardDiv>
                  <MainDevisImageDiv>
                    <MainDevisIMG src={mainPhotoUri || noImage} alt={title} />
                    <MainDevisBtnDiv>
                      <MainDevisBtn
                        onClick={() => {
                          dispatch(toggleLike(id));
                        }}
                      >
                        {isLiked[id] ? <Like /> : <NotLike />}
                      </MainDevisBtn>
                      <MainDevisBtn>
                        <Compare />
                      </MainDevisBtn>
                    </MainDevisBtnDiv>
                  </MainDevisImageDiv>
                  <TitleLink to={`/product/${id}`}>{title}</TitleLink>
                  <StarsDiv>
                    <StarRating
                      readonly={true}
                      rate={review.rating | 0}
                      size={20}
                    />
                    {/* <Comments>({comments})</Comments> */}
                  </StarsDiv>
                  <Price>{price}</Price>
                  <DiscountContainer>
                    <DiscountDiv>
                      <Discountprice>{`${
                        price - (price * 8) / 100
                      }`}</Discountprice>
                      {/* <Discountprice>{`${price} / 100% * 8%`}</Discountprice> */}
                      <Deal>-{discount}%</Deal>
                    </DiscountDiv>
                    <MainDevisBtn onClick={() => handleToggleCartModal(id)}>
                      <Cart style={style} />
                    </MainDevisBtn>
                  </DiscountContainer>
                </CardDiv>
              </CardItem>
            )
          )}
      </CardList>
      <CartModal
        isOpen={isOpenCartModal}
        handleClose={() => setIsOpenCartModal(false)}
      />
    </>
  );
};

export default PhoneCardList;
