import Modal from "../../shared/Modal/Modal";
import PageTitle from "../../shared/PageTitle/PageTitle";
import CartTopInfo from "./CartTopInfo";
import CartCenterInfo from "./CartCenterInfo";

// import PhoneCardList from "../PhoneCardList/PhoneCardList";
import { ModalProps } from '../../types/modalsEntity';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "12px",
  background: "var(--Primary-white, #fff)",
  boxShadow: "0px 4px 48px 0px rgba(0, 0, 0, 0.1)",
  padding: "40px",
  width: "1320px",
};

const CartModal = ({ isOpen, handleClose }: ModalProps) => {
  // const visibles = true; //close btn prop

  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      // visible={visibles}
      style={style}
    >
      <>
        <PageTitle title={"Cart"} />
        <CartTopInfo />
        <CartCenterInfo />
        {/* <PageTitle title={"People buy these together"} />
      <PhoneCardList /> */}
      </>
    </Modal>
  );
};
export default CartModal;
