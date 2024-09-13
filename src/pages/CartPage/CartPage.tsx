import PageTitle from "../../shared/PageTitle/PageTitle";
import CartTopInfo from "../../components/CartModal/CartTopInfo";
import CartCenterInfo from "../../components/CartModal/CartCenterInfo";
// import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";

import {
  MainSection,
  Container,
} from "../../shared/Container/Container.styled";

const CartPage = () => {
  return (
    <MainSection>
      <Container>
        <PageTitle title={"Cart"} />
        <CartTopInfo />
        <CartCenterInfo />
        <PageTitle title={"People buy these together"} />
        {/* <PhoneCardList /> */}
      </Container>
    </MainSection>
  );
};
export default CartPage;
