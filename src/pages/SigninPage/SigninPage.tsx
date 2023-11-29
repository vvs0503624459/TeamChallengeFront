import SigninForm from "../../components/SigninForm/SigninForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import { NavLink } from "react-router-dom";
import {
  MainSection,
  // Section,
  Container,
} from "../../components/Container/Container.styled";

import { Wrap } from "../SignupPage/SignupPage.styled";

const SigninPage = () => {
  return (
    <MainSection>
      <Container>
        <Wrap>
          <PageTitle title={"Sign In"} />
          <SigninForm />
          <div>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </Wrap>
      </Container>
    </MainSection>
  );
};
export default SigninPage;
