import SignupForm from "../../components/SignupForm/SignupForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { NavLink } from "react-router-dom";
import {
  MainSection,
  // Section,
  Container,
} from "../../components/Container/Container.styled";
import { Wrap } from "./SignupPage.styled";

const SignupPage = () => {
  return (
    <MainSection>
      <Container>
        <Wrap>
          <PageTitle title={"Sign Up"} />
          <SignupForm />
          <div>
            <NavLink to="/signin">Sign In</NavLink>
          </div>
        </Wrap>
      </Container>
    </MainSection>
  );
};
export default SignupPage;
