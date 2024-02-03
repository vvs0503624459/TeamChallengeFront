import React, { FC, useEffect } from "react";
import { Modal, Overlay } from "./SpecificationsModal.styled";
import iconsSprite from "../../../../assets/iconsSprite.svg";

interface SpecificationsModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  desc: string;
}

export const SpecificationsModal: FC<SpecificationsModalProps> = ({
  isModalOpen,
  onClose,
  desc,
}) => {
  useEffect(() => {
    const close = (e: KeyboardEvent | React.KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("keydown", close);
    };
  }, [onClose]);

  return (
    <>
      {isModalOpen && (
        <>
          <Overlay onClick={onClose} />
          <Modal onClick={(e) => e.stopPropagation()}>
            <svg>
              <use href={iconsSprite + "#pointer-in-tooltip-frame"}></use>
            </svg>
            <p>{desc}</p>
          </Modal>
        </>
      )}
    </>
  );
};
