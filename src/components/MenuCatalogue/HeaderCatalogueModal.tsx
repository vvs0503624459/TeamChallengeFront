import Modal from "../Modal/Modal";
import MenuCatalogueList from "./MenuCatalogueList";
type Props = {
  isOpen: boolean;
  handleClose: () => void;
};
const style = {
  position: "absolute",
  top: "41%",
  left: "18%",
  transform: "translate(-50%, -50%)",
  borderRadius: "0px 12px",
  background: "var(--Primary-white, #fff)",
  // boxShadow: "0px 4px 48px 0px rgba(0, 0, 0, 0.1)",
  padding: "0",
  width: "350px",
  height: "430px",
};

const HeaderCatalogueModal = ({ isOpen, handleClose }: Props) => {
  const visibles = false;
  return (
    <Modal
      isOpen={isOpen}
      handleClose={handleClose}
      style={style}
      visible={visibles}
    >
      <MenuCatalogueList />
    </Modal>
  );
};
export default HeaderCatalogueModal;
