import phone from './phone.json';

import {
    CardList,
    CardItem, 
    IMG,
    CardDiv,
    Title,
    Comments,
    Price,
    DiscountDiv,
    Discountprice,
    Deal,
} from './PhoneCardList.styled';

const PhoneCardList = () => {
return (
    <CardList>
{phone.map(({id, title, image, comments, price, discountprice, deal})=>(
<CardItem key={id}>
    <CardDiv>
    <IMG src={image} alt={title}/>
    <Title>{title}</Title>
    <Comments>{comments}</Comments>
    <Price>{price}</Price>
    <DiscountDiv>
    <Discountprice>{discountprice}</Discountprice>
    <Deal>{deal}</Deal>
    </DiscountDiv>

    </CardDiv>

    </CardItem>
))

}
    </CardList>
)
}
export default PhoneCardList;