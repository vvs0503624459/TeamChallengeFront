import { Link } from "react-router-dom";
import { Container } from "../Container/Container.styled";

import ChangeModal from "../ChangeModal/ChangeModal";

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
  OpenModalButton,
} from "./Header.styled";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useState } from "react";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleToggleUserModal = () => {
    setIsOpenModal((state) => !state);
  };


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
            <OpenModalButton onClick={handleToggleUserModal}>
              <User />
            </OpenModalButton>
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
        <ChangeModal isOpen={isOpenModal} handleClose={handleToggleUserModal} />
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
