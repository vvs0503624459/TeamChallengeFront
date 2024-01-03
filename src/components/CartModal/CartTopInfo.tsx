import cart from "../../data/cart.json";

import { Like, Compare, NotLike } from "../IconComponents/IconsCatalogue";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleLike } from "../../redux/products/likeReducer";

import {
  CartListTop,
  CardItem,
  DIVIMG,
  CartIMG,
  CartTextDiv,
  CartBUTTONDIV,
  BUTTON,
  CardDiv,
  TitleLink,
  StockButton,
  Price,
  DiscountContainer,
  DiscountDiv,
  PlusButtonList,
  PlusButton,
  Discountprice,
  Deal,
} from "./CartModal.styled";
import { IoIosCheckmark } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

const CartTopInfo = () => {
  const isLiked = useAppSelector((state) => state.productsLikeState ?? false);
  const dispatch = useAppDispatch();
  return (
    <CartListTop>
      {cart.map(({ id, title, image, price, discountprice, deal }) => (
        <CardItem key={id}>
          <CardDiv>
            <DIVIMG>
              <CartIMG src={image} alt={title} />
              <CartTextDiv>
                <TitleLink to={`/product/${id}`}>{title}</TitleLink>
                <StockButton>
                  <IoIosCheckmark />
                  In Stock
                </StockButton>
                <CartBUTTONDIV>
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
                </CartBUTTONDIV>
              </CartTextDiv>
            </DIVIMG>

            <div>
              <Price>{price}</Price>
              <DiscountContainer>
                <DiscountDiv>
                  <Discountprice>{discountprice}</Discountprice>
                  <Deal>{deal}</Deal>
                </DiscountDiv>
                <PlusButtonList>
                  <li>
                    <PlusButton>
                      <LuMinus />
                    </PlusButton>
                  </li>
                  <li>
                    <PlusButton>
                      <LuPlus />
                    </PlusButton>
                  </li>
                </PlusButtonList>
              </DiscountContainer>
            </div>
          </CardDiv>
        </CardItem>
      ))}
    </CartListTop>
  );
};
export default CartTopInfo;
