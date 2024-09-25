import Backdrop from "@mui/material/Backdrop";
import MuiModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IoClose } from "react-icons/io5";
import { Box } from "@mui/material";

import { CloseButton } from "./Modal.styled";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  style: object;
  // hideBackdrop: boolean;
};

const OtherModal = ({ children, isOpen,  style, handleClose }: Props) => {
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
          <CloseButton onClick={handleClose}>
            <IoClose size={32} />
          </CloseButton>
          {children}
        </Box>
      </Fade>
    </MuiModal>
  );
};
export default OtherModal;
