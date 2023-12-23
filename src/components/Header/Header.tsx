import { Link } from "react-router-dom";
import { Container } from "../Container/Container.styled";
import {
  Logo,
  Compare,
  NotLike,
  User,
  Cart,
  Catalogue,
} from "../IconComponents/IconsCatalogue";
import SearchBar from "../SearchBar/SearchBar";
import {
  HeaderInnerWrapper,
  HeaderWrapper,
  HeaderIconsWrapper,
  DivLogoCatalogue,
  CatalogueButton,
  CatalogueBtnText,
  LogoLink,
  IconsLink,
} from "./Header.styled";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Header = () => {

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInnerWrapper>
          <DivLogoCatalogue>
            <LogoLink to="/home">
              <Logo />
            </LogoLink>
            <Link to="/home">
              <CatalogueButton>
                <Catalogue />
                <CatalogueBtnText>Catalogue</CatalogueBtnText>
              </CatalogueButton>
            </Link>
          </DivLogoCatalogue>

          <SearchBar />
          <LanguageSwitcher />
          <HeaderIconsWrapper>
            <IconsLink to="/signin">
              <User />
            </IconsLink>
            <IconsLink to="/#">
              <NotLike />
            </IconsLink>
            <IconsLink to="/#">
              <Compare />
            </IconsLink>
            <IconsLink to="/">
              <Cart />
            </IconsLink>
          </HeaderIconsWrapper>
        </HeaderInnerWrapper>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
