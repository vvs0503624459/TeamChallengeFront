import FooterSab from "../FooterSab/FooterSab";
import {
  Logo,
  FooterInstagram,
  FooterTwitter,
  FooterFacebook,
} from "../../shared/IconsCatalogue";
import { Container } from "../../shared/Container/Container.styled";
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

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <div>
            <Logo />
            <FooterText>{t("Simplify Your Tech Journey")}</FooterText>
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
                <FooterItem>{t("About")}</FooterItem>
                <FooterItem>{t("Vacancies")}</FooterItem>
                <FooterItem>{t("Customer Support")}</FooterItem>
              </FooterList>
            </div>
            <div>
              <FooterListTitles>{t("Information")}</FooterListTitles>
              <FooterList>
                <FooterItem>{t("Delivery and payment")}</FooterItem>
                <FooterItem>{t("Warranty and service")}</FooterItem>
                <FooterItem>{t("Return and exchange")}</FooterItem>
                <FooterItem>{t("Credit")}</FooterItem>
              </FooterList>
            </div>
          </FooterListWrapper>
          <FooterSab />
        </FooterContainer>

        <PolicyWrapper>
          <PolicyText>{t("TechEase")}</PolicyText>
          <PolicyList>
            <PolicyItem>
              <PolicyLink to={`/cookie`}>{t("Cookie Policy")}</PolicyLink>
            </PolicyItem>
            <PolicyItem>
              <PolicyLink to={`/privacy`}>{t("Privacy Policy")}</PolicyLink>
            </PolicyItem>
          </PolicyList>
        </PolicyWrapper>
      </Container>
    </FooterWrapper>
  );
};
export default Footer;
