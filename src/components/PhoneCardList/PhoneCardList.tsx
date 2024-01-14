import phone from "../../data/phone.json";
import StarRating from "../StarRating/StarRating";
import CartModal from "../CartModal/CartModal";
import { Like, Compare, Cart, NotLike } from "../IconComponents/IconsCatalogue";
import {
  CardList,
  CardItem,
  DIVIMG,
  IMG,
  BUTTONDIV,
  BUTTON,
  CardDiv,
  TitleLink,
  StarsDiv,
  Comments,
  Price,
  DiscountContainer,
  DiscountDiv,
  Discountprice,
  Deal,
} from "./PhoneCardList.styled";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleLike } from "../../redux/products/likeReducer";
import { addProductToCart } from "../../redux/products/cartReducer";
const style = {
  fill: "#5826da",
};

const PhoneCardList = () => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  // const phone = useAppSelector((state) => state.products);
  const isLiked = useAppSelector((state) => state.productsLikeState ?? false);
  const dispatch = useAppDispatch();

  const handleToggleCartModal = (id: string) => {
    dispatch(addProductToCart({ id }));
    setIsOpenCartModal(true);
  };

  return (
    <>
      <CardList>
        {phone.map(
          ({ id, title, image, comments, price, discountprice, deal }) => (
            <CardItem key={id}>
              <CardDiv>
                <DIVIMG>
                  <IMG src={image} alt={title} />
                  <BUTTONDIV>
                    <BUTTON
                      onClick={() => {
                        dispatch(toggleLike(id));
                      }}
                    >
                      {isLiked[id] ? <Like /> : <NotLike />}
                    </BUTTON>
                    <BUTTON>
                      <Compare />
                    </BUTTON>
                  </BUTTONDIV>
                </DIVIMG>
                <TitleLink to={`/product/${id}`}>{title}</TitleLink>
                <StarsDiv>
                  <StarRating />
                  <Comments>({comments})</Comments>
                </StarsDiv>
                <Price>{price}</Price>
                <DiscountContainer>
                  <DiscountDiv>
                    <Discountprice>{discountprice}</Discountprice>
                    <Deal>{deal}</Deal>
                  </DiscountDiv>
                  <BUTTON onClick={() => handleToggleCartModal(id)}>
                    <Cart style={style} />
                  </BUTTON>
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
