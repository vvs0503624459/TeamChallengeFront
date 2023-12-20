import FooterSab from "../FooterSab/FooterSab";
import {
  Logo,
  FooterInstagram,
  FooterTwitter,
  FooterFacebook,
} from "../IconComponents/IconsCatalogue";
import { Container } from "../Container/Container.styled";
import {
  FooterWrapper,
  FooterContainer,
  FooterText,
  FooterIconList,
  FooterListWrapper,
  FooterListTitles,
  FooterList,
  FooterItem,
  PolicyWrapper,
  PolicyText,
  PolicyList,
  PolicyItem,
  PolicyLink,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <div>
            <Logo />
            <FooterText>Simplify Your Tech Journey</FooterText>
            <FooterIconList>
              <li>
                <FooterInstagram />
              </li>
              <li>
                <FooterTwitter />
              </li>
              <li>
                <FooterFacebook />
              </li>
            </FooterIconList>
          </div>

          <FooterListWrapper>
            <div>
              <FooterListTitles>TechEase</FooterListTitles>
              <FooterList>
                <FooterItem>About</FooterItem>
                <FooterItem>Vacancies</FooterItem>
                <FooterItem>Customer Support</FooterItem>
              </FooterList>
            </div>
            <div>
              <FooterListTitles>Information</FooterListTitles>
              <FooterList>
                <FooterItem>Delivery and payment</FooterItem>
                <FooterItem>Warranty and service</FooterItem>
                <FooterItem>Return and exchange</FooterItem>
                <FooterItem>Credit</FooterItem>
              </FooterList>
            </div>
            <div>
              <FooterListTitles>TechEase</FooterListTitles>
              <FooterList>
                <FooterItem>About</FooterItem>
                <FooterItem>Vacancies</FooterItem>
                <FooterItem>Customer Support</FooterItem>
              </FooterList>
            </div>
          </FooterListWrapper>
          <FooterSab />
        </FooterContainer>

        <PolicyWrapper>
          <PolicyText>TECH EASE 2023. All Rights Reserved.</PolicyText>
          <PolicyList>
            <PolicyItem>
              <PolicyLink to={`/product`}>Cookie Policy</PolicyLink>
            </PolicyItem>
            <PolicyItem>
              <PolicyLink to={`/product`}>Privacy Policy</PolicyLink>
            </PolicyItem>
          </PolicyList>
        </PolicyWrapper>
      </Container>
    </FooterWrapper>
  );
};
export default Footer;
