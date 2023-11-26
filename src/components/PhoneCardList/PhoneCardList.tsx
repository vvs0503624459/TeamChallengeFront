import phone from "../../data/phone.json";
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
  Comments,
  Price,
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

              <Comments>{comments}</Comments>
              <Price>{price}</Price>
              <DiscountDiv>
                <Discountprice>{discountprice}</Discountprice>
                <Deal>{deal}</Deal>
                <BUTTON>
                  <Cart />
                </BUTTON>
              </DiscountDiv>
            </CardDiv>
          </CardItem>
        )
      )}
    </CardList>
  );
};
export default PhoneCardList;
