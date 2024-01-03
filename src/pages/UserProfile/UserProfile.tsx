import UserCatalog from "../../components/PersonalInformation/UserCatalog/UserCatalog";
import UserProfNavigation from "../../components/PersonalInformation/UserProfNavigation/UserProfNavigation";

import {
  MainSection,
  Container,
} from "../../components/Container/Container.styled";

import { UserWrapperPage } from "./UserProfile.styled";


const UserProfile = () => {

  return (
    <MainSection>
      <Container>
        <UserWrapperPage>
          <div>
            <UserCatalog />
          </div>
          <UserProfNavigation />
        </UserWrapperPage>
      </Container>
    </MainSection>
  );
};
export default UserProfile;
