import { Link } from "react-router-dom";
import { Container } from "../Container/Container.styled";

import ChangeModal from "../ChangeModal/ChangeModal";
import CartModal from "../CartModal/CartModal";

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

const style = {
  fill: "#5826da",
};
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useState } from "react";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenCartModal, setIsOpenCartModal] = useState(false);

  const handleToggleUserModal = () => {
    setIsOpenModal((state) => !state);
  };

  const handleToggleCartModal = () => {
    setIsOpenCartModal((state) => !state);
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
            <IconsLink to="/user">
              <Compare />
            </IconsLink>
            <OpenModalButton onClick={handleToggleCartModal}>
              <Cart style={style} />
            </OpenModalButton>
          </HeaderIconsWrapper>
        </HeaderInnerWrapper>

        <ChangeModal isOpen={isOpenModal} handleClose={handleToggleUserModal} />
        <CartModal
          isOpen={isOpenCartModal}
          handleClose={handleToggleCartModal}
        />
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
