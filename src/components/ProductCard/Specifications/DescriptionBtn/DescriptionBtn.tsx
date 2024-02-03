import { FC, useRef, useState, MouseEvent } from "react";
import { SpecificationsModal } from "../SpecificationsModal/SpecificationsModal";
import { Button } from "./DescriptionBtn.styled";
import iconsSprite from "../../../../assets/iconsSprite.svg";

interface DescriptionProps {
  desc: string;
}

export const DescriptionBtn: FC<DescriptionProps> = ({ desc }) => {
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);
  const ref = useRef<SVGSVGElement>(null);

  const onOpen = (e: MouseEvent): void => {
    if (ref.current && !ref.current.contains(e.currentTarget)) {
      setisModalOpen(true);
      setTimeout(() => {
        setisModalOpen(false);
      }, 5000);
    }
  };

  const onClose = (): void => {
    setisModalOpen(false);
  };

  return (
    <>
      <SpecificationsModal isModalOpen={isModalOpen} onClose={onClose} desc={desc} />
      <Button type="button" onClick={onOpen}>
        <svg ref={ref}>
          <use href={iconsSprite + "#icon-help-circle"}></use>
        </svg>
      </Button>
    </>
  );
};
