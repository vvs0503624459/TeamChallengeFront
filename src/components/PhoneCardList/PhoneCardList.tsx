import phone from "../../data/phone.json";
import StarRating from "../StarRating/StarRating";
import { Like, Compare, Cart } from "../IconComponents/IconsCatalogue";
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

const PhoneCardList = () => {
  return (
    <CardList>
      {phone.map(
        ({ id, title, image, comments, price, discountprice, deal }) => (
          <CardItem key={id}>
            <CardDiv>
              <DIVIMG>
                <IMG src={image} alt={title} />
                <BUTTONDIV>
                  <BUTTON>
                    <Like />
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
                <BUTTON>
                  <Cart />
                </BUTTON>
              </DiscountContainer>

            </CardDiv>
          </CardItem>
        )
      )}
    </CardList>
  );
};
export default PhoneCardList;
