import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MainProductState } from "../../redux/types/initialEntity";
import {
  // getMainDevises,
   getDeviсesByID
} from "../../redux/products/products-operation";

import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import StarRating from "../../components/StarRating/StarRating";
import {
  MainSection,
  Section,
  Container,
} from "../../components/Container/Container.styled";

import { useTranslation } from "react-i18next";

import { NavList, NavItem, NavLink } from "./ProductPage.styled";
import general from "../../data/general.json";

const ProductCard = () => {
  const { t } = useTranslation();

  const location = useLocation();
  const { id } = useParams();
  const deviceId: string = id!;
  // console.log("products/deviceId", deviceId);
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
  // }, [dispatch]);
  const product = useAppSelector((state) => {
    return state.products.product;
  });
  console.log("products/ProductCard", product);
  return (
    <MainSection>
      <Container>
        <div>
          {general
            .filter((obj) => obj.id === deviceId)
            .map(({ maintitle, comments, stars }) => (
              <div key={deviceId}>
                <h1>{maintitle}</h1>
                <StarRating size={32}
                  rate={+stars}
                  readonly={false} />
                <p>{comments}</p>
              </div>
            ))}
        </div>

        <div>
          <NavList>
            <NavItem>
              <NavLink to="general" state={{ from: location }}>
                {t("General")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="specifications" state={{ from: location }}>
                {t("Specifications")}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="reviews" state={{ from: location }}>
                {t("Reviews & Questions")}(324)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="accessories" state={{ from: location }}>
                {t("Accessories")}
              </NavLink>
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
