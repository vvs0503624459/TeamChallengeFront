import Backdrop from "@mui/material/Backdrop";
import MuiModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IoClose } from "react-icons/io5";
import { Box } from "@mui/material";

import { CloseBtn } from "./Modal.styled";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  style: object;
  visible: boolean;
  // hideBackdrop: boolean;
};

const Modal = ({ children, isOpen, visible, style, handleClose }: Props) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      // hideBackdrop
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          style: { background: "transparent" },
        },
      }}
    >
      <Fade in={isOpen} style={style}>
        <Box style={style}>
          <CloseBtn onClick={handleClose} visible={visible}>
            <IoClose size={32} />
          </CloseBtn>
          {children}
        </Box>
      </Fade>
    </MuiModal>
  );
};
export default Modal;
