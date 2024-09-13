import PageTitle from "../../shared/PageTitle/PageTitle";
import {
  SignWrapper,
  SignText,
} from "../SignupForm/SignupForm.styled";

const ThankYouModal = () => {
  return (
    <SignWrapper>
      <PageTitle title={"Thank you!"} />

      <SignText>
        A letter with password recovery instructions has already been sent to
        your email.
      </SignText>
    </SignWrapper>
  );
};
export default ThankYouModal;
