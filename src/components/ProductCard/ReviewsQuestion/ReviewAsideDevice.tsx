// import { useEffect, useState } from "react";
import { useState } from "react";
import { addProductToCart } from "../../../redux/products/cartReducer";
import CartModal from "../../CartModal/CartModal";
import { Cart } from "../../IconComponents/IconsCatalogue";
import StarRating from "../../StarRating/StarRating";
import {
  CardItem,
  MainProdImageDiv,
  MainProdIMG,
  // MainProdBtnDiv,
  MainProdBtn,
  CardDiv,
  TitleLink,
  StarsDiv,
  Price,
  DiscountContainer,
  DiscountDiv,
  Discountprice,
  Deal,
  Comments,
  CardDivHeader,
  CardDivFooter,
} from "./ReviewProductCard.styled.tsx";
import {
  DeviceIdState,
} from "../../../redux/types/initialEntity";
import { useAppDispatch } from "../../../redux/hooks";
import ReviewCardSpecifications from "./ReviewCardSpecifications.tsx";

type Props = {
  id: string | undefined;
  comments: number | null;
  device: DeviceIdState | undefined;
};
const style = {
  fill: "#5826da",
};
const ReviewAsideDevice = ({ comments, device }: Props) => {
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);
  const dispatch = useAppDispatch();


  const handleToggleCartModal = (id: string) => {
    dispatch(addProductToCart({ id }));
    setIsOpenCartModal(true);
  };


  // console.log("device/ReviewAsideDevice", device);

  return (
    <>
      {device && (
        <>
          <CardItem key={device.id}>
            <MainProdImageDiv>
              <MainProdIMG src={device.photoUris[0]} alt={device.title} />
              {/* <MainProdBtnDiv></MainProdBtnDiv> */}
            </MainProdImageDiv>
            <CardDiv>
              <CardDivHeader>
                <TitleLink to={`/product/${device.id}`}>{device.title}</TitleLink>
                <StarsDiv>
                  <StarRating />
                  <Comments>
                    {comments && `(${comments})`}
                  </Comments>
                </StarsDiv>
              </CardDivHeader>
              <CardDivFooter>
                <Price>{device.price.toLocaleString() + " ₴"}</Price>
                <DiscountContainer>
                  <DiscountDiv>
                    <Discountprice>{`${Math.round(device.price - (device.price * device.discount) / 100).toLocaleString()
                      + " ₴"}`}</Discountprice>
                    {/* <Discountprice>{`${price} / 100% * 8%`}</Discountprice> */}
                    <Deal>-{device.discount}%</Deal>
                  </DiscountDiv>
                  <MainProdBtn onClick={() => handleToggleCartModal(device.id)}>
                    <Cart style={style} />
                  </MainProdBtn>
                </DiscountContainer>
              </CardDivFooter>
            </CardDiv>
          </CardItem>
          <CartModal
            isOpen={isOpenCartModal}
            handleClose={() => setIsOpenCartModal(false)}
          />
          <ReviewCardSpecifications device={device} />
        </>
      )}
    </>
  );
};

export default ReviewAsideDevice;
