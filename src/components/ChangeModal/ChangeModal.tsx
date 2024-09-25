import { useState } from "react";

import Modal from "../../shared/Modal/Modal";
import SignupForm from "../SignupForm/SignupForm";
import SigninForm from "../SigninForm/SigninForm";

import PasswordRecovery from "../PasswordRecovery/PasswordRecovery";
import ThankYouModal from "../PasswordRecovery/ThankYouModal";

import { Wrapper, ChangeButton, Button } from "./ChangeModal.styled";

import { ModalProps } from '../../types/modalsEntity';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '12px',
  background: 'var(--Primary-white, #fff)',
  boxShadow: '0px 4px 48px 0px rgba(0, 0, 0, 0.1)',
  padding: '40px',
  width: '415px',
  }

const ChangeModal = ({ isOpen, handleClose }: ModalProps) => {
  // const navigate = useNavigate()
  const [changeModal, setChangeModal] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  // const visibles = true; //close btn prop

  // const isLogged = useAppSelector((state) => {
  //   return state.auth.isLoggedIn;
  // });

  const handleToggleModal = () => {
    setChangeModal((state) => !state);
  };

  const handleIsForgotPassword = () => {
    setIsForgotPassword((state) => !state);
  };

  const handleToggleThankyouModal = () => {
    setThankYou((state) => !state);
  };
  const handleToggleModalTest = () => {
    setChangeModal((state) => !state);
    setIsForgotPassword((state) => !state);
  };
  const handleToggleModalTestTwo = () => {
    setChangeModal((state) => !state);
    setIsForgotPassword((state) => !state);
    setThankYou((state) => !state);
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} style={style}>
      <Wrapper>
        {!changeModal ? (
          !isForgotPassword ? (
            <>
              <SigninForm handleIsForgotPassword={handleIsForgotPassword} />
              <ChangeButton onClick={handleToggleModal}>Sign Up</ChangeButton>
            </>
          ) : !thankYou ? (
            <>
              <PasswordRecovery
                handleToggleThankyouModal={handleToggleThankyouModal}
              />
              <ChangeButton onClick={handleToggleModalTest}>
                Sign In
              </ChangeButton>
            </>
          ) : (
            <>
              <ThankYouModal />
              <Button onClick={handleToggleModalTestTwo}>Log in again</Button>
            </>
          )
        ) : (
          <>
            <SignupForm />
            <ChangeButton onClick={handleToggleModal}>Sign In</ChangeButton>
          </>
        )}
      </Wrapper>
    </Modal>
  );
};

export default ChangeModal;
