import cart from "../../data/Cartcredit.json";
import { Coins, Cart } from "../../shared/IconsCatalogue";

import {
  CartListCenter,
  CardItemCenter,
  CartWrapperInfoCenter,
  CartTextDivCenter,
  CartTextCenter,
  CartTitleCenter,
  CartButtonListCenter,
  CartButtonCenter,
  CartButtonBuyCenter,
  CartWrapperChekCenter,
  CartTitleChekCenter,
  CartButtonChekCenter,
} from "./CartModal.styled";

const style = {
  fill: "#FFFFFF",
};

const CartCenterInfo = () => {
  return (
    <CartListCenter>
      {cart.map(({ id, price, pomb, apple, lapka, lemon, discountprice }) => (
        <CardItemCenter key={id}>
          <CartWrapperInfoCenter>
            <CartTextDivCenter>
              <CartTextCenter>On credit from</CartTextCenter>
              <CartTitleCenter>{price}</CartTitleCenter>
            </CartTextDivCenter>

            <CartButtonListCenter>
              <li>
                <CartButtonCenter>{pomb}</CartButtonCenter>
              </li>
              <li>
                <CartButtonCenter>{apple}</CartButtonCenter>
              </li>
              <li>
                <CartButtonCenter>{lapka}</CartButtonCenter>
              </li>
              <li>
                <CartButtonCenter>{lemon}</CartButtonCenter>
              </li>
            </CartButtonListCenter>

            <CartButtonBuyCenter>
              <Coins />
              Buy on Credit
            </CartButtonBuyCenter>
          </CartWrapperInfoCenter>

          <CartWrapperChekCenter>
            <CartTitleChekCenter>{discountprice}$</CartTitleChekCenter>
            <CartButtonChekCenter>
              <Cart style={style} />
              Proceed to Checkout
            </CartButtonChekCenter>
          </CartWrapperChekCenter>
        </CardItemCenter>
      ))}
    </CartListCenter>
  );
};
export default CartCenterInfo;
