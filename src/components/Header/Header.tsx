// import { Link } from "react-router-dom";
import { Container } from "../Container/Container.styled";

import ChangeModal from "../ChangeModal/ChangeModal";
import HeaderCatalogueModal from "../MenuCatalogue/HeaderCatalogueModal";

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
  LikesCounter,
} from "./Header.styled";

const style = {
  fill: "#5826da",
};
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from 'react-router-dom';
// import { initialStateAuthType } from '../../redux/types/initialEntity';
const Header = () => {
  const navigate = useNavigate()
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalHeader, setIsOpenModalHeader] = useState(false);

    const isLogged = useAppSelector((state) => {
    return state.auth.isLoggedIn;
  });

  const handleToggleUserModal = () => {
    if(isLogged){
      setIsOpenModal(false);
      navigate('/user')
    }else{
      setIsOpenModal(true);
    }
  };

  const handleToggleHeaderModal = () => {
    setIsOpenModalHeader((state) => !state);
  };

  const Likes = useAppSelector((state) => state.productsLikeState ?? false);
  // console.log(
  //   "(Object.keys(Likes).length =",
  //   Object.values(Likes).filter(value => value === true).length
  // );

  return (
    <HeaderWrapper>
      <Container>
        <HeaderInnerWrapper>
          <DivLogoCatalogue>
            <LogoLink to="/home">
              <Logo />
            </LogoLink>
            {/* <Link to="/home"> */}
            <CatalogueButton onClick={handleToggleHeaderModal}>
              <Catalogue />
              <CatalogueBtnText>Catalogue</CatalogueBtnText>
            </CatalogueButton>
            {/* </Link> */}
          </DivLogoCatalogue>

          <SearchBar />
          <LanguageSwitcher />
          <HeaderIconsWrapper>
            <OpenModalButton onClick={handleToggleUserModal}>
              <User />
            </OpenModalButton>
            <IconsLink to="/">
              <Compare />
            </IconsLink>
            <IconsLink to="/#">
              <NotLike />
              <LikesCounter
                // likesCount={Object.keys(Likes).length ? true : false}
                likesCount={
                  Object.values(Likes).filter((value) => value === true).length
                    ? true
                    : false
                }
              >
                {/* {Object.keys(Likes).length} */}
                {Object.values(Likes).filter((value) => value === true).length}
              </LikesCounter>
            </IconsLink>
            <IconsLink to="/cart">
              <Cart style={style} />
            </IconsLink>
          </HeaderIconsWrapper>
        </HeaderInnerWrapper>

        <ChangeModal isOpen={isOpenModal} handleClose={handleToggleUserModal} />
        <HeaderCatalogueModal
          isOpen={isOpenModalHeader}
          handleClose={handleToggleHeaderModal}
        />
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
