import OtherModal from "../../shared/Modal/OtherModal";
import MenuCatalogueList from "./MenuCatalogueList";

import { ModalProps } from '../../types/modalsEntity';

const style = {
  position: "absolute",
  top: "41%",
  left: "19%",
  transform: "translate(-50%, -50%)",
  borderRadius: "0px 12px",
  background: "var(--Primary-white, #fff)",
  // boxShadow: "0px 4px 48px 0px rgba(0, 0, 0, 0.1)",
  padding: "0",
  width: "350px",
  height: "430px",
};

const HeaderCatalogueModal = ({ isOpen, handleClose }: ModalProps) => {
  // const visibles = false;
  return (
    <OtherModal
      isOpen={isOpen}
      handleClose={handleClose}
      style={style}
      // visible={visibles}
    >
      <MenuCatalogueList />
    </OtherModal>
  );
};
export default HeaderCatalogueModal;
