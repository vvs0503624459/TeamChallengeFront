// import { signInWithGooglePopup } from "../../utils/firebase.utils";

import { Google, Facebook } from "../../shared/IconsCatalogue";

import { ModalIconList, ModalIconButton } from "./ModalIcons.styled";

const ModalIcons = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);
  };

  return (
    <ModalIconList>
      <li>
        <ModalIconButton type="button" onClick={logGoogleUser}>
          <Google />
        </ModalIconButton>
      </li>
      <li>
        <ModalIconButton>
          <Facebook />
        </ModalIconButton>
      </li>
    </ModalIconList>
  );
};
export default ModalIcons;
