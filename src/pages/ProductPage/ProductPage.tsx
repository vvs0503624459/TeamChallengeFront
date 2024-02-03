import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MainProductState } from "../../redux/types/initialEntity";
import { getDeviсesByID } from "../../redux/products/products-operation";

import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
// import StarRating from "../../components/StarRating/StarRating";
import { MainSection, Section, Container } from "../../components/Container/Container.styled";

import { useTranslation } from "react-i18next";

import { NavList, NavItem, ProductTitle, NavLinkStyled } from "./ProductPage.styled";
// import general from "../../data/general.json";
import { useProduct } from "../../redux/hooks/usePeoduct";
// import { string } from "yup";

const ProductCard = () => {
  const { t } = useTranslation();
  const { currentProduct } = useProduct();

  const location = useLocation();
  const { id: deviceId } = useParams();
  // const deviceId: string = id!;

  const dispatch = useAppDispatch();

  // const selectDrinkById: MainProductState[] = useAppSelector((state) => {
  //   return state.products.productsList.find((devices) => devices.id === deviceId))
  // });

  const mainProduct: MainProductState[] = useAppSelector((state) => {
    return state.products.productsList;
  });

  useEffect(() => {
    dispatch(getDeviсesByID({ id: deviceId! }));
    // dispatch(getMainDevises());
  }, [dispatch, deviceId]);

  return (
    <MainSection>
      <Container>
        {currentProduct && <ProductTitle>{currentProduct.title}</ProductTitle>}
        {/* <div>
          {general
            .filter((obj) => obj.id === devisesId)
            .map(({ maintitle, comments }) => (
              <div key={devisesId}>
                <h1>{maintitle}</h1>
                <StarRating />
                <p>{comments}</p>
              </div>
            ))}
        </div> */}

        <div>
          <NavList>
            <NavItem>
              <NavLinkStyled to="general" state={{ from: location }}>
                {t("General")}
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="specifications" state={{ from: location }}>
                {t("Specifications")}
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="reviews" state={{ from: location }}>
                {t("Reviews & Questions")}(324)
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="accessories" state={{ from: location }}>
                {t("Accessories")}
              </NavLinkStyled>
            </NavItem>
          </NavList>
          <Outlet />
        </div>

        <>
          {mainProduct.map(({ title, devices }) => (
            <Section>
              <PageTitle title={title} />

              <PhoneCardList devices={devices} />
            </Section>
          ))}
        </>
      </Container>
    </MainSection>
  );
};
export default ProductCard;
