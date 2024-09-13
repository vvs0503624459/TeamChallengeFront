import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getDeviсesByID } from "../../redux/products/products-operation";
import { useProduct } from "@/redux/hooks/usePeoduct";

import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Loader from "@/components/Loader/Loader";
import PageTitle from "@/shared/PageTitle/PageTitle";
import PhoneCardList from "@/components/PhoneCardList/PhoneCardList";
import {
  MainSection,
  Section,
  Container,
} from "@/shared/Container/Container.styled";

import { useTranslation } from "react-i18next";

import {
  NavList,
  NavItem,
  ProductTitle,
  NavLinkStyled,
} from "./ProductPage.styled";

// // import StarRating from "../../components/StarRating/StarRating";
// // import general from "../../data/general.json";
// // import { string } from "yup";

const ProductCard = () => {
  const { t } = useTranslation();
  const { currentProduct, mainProduct, isLoading } = useProduct();
  const location = useLocation();
  const { id: deviceId } = useParams();
  //   // const deviceId: string = id!;
  const dispatch = useAppDispatch();

  //   // const selectDrinkById: MainProductState[] = useAppSelector((state) => {
  //   //   return state.products.productsList.find((devices) => devices.id === deviceId))
  //   // });

  // Логіка для визначення активної вкладки при завантаженні сторінки
  const [activeTab, setActiveTab] = useState<string>("general");

  useEffect(() => {
    if (location.pathname === "/general") {
      setActiveTab("general");
    } else if (location.pathname === "/specifications") {
      setActiveTab("specifications");
    } else if (location.pathname === "/reviews") {
      setActiveTab("reviews");
    } else if (location.pathname === "/accessories") {
      setActiveTab("accessories");
    }
  }, [location.pathname]);

  useEffect(() => {
    dispatch(getDeviсesByID({ id: deviceId! }));
  }, [dispatch, deviceId]);

  //   useEffect(() => {
  //     dispatch(getDeviсesByID({ id: deviceId! }));
  //     // dispatch(getMainDevises());
  //   }, [dispatch, deviceId]);

  return (
    <MainSection>
      <Container>
        {isLoading && <Loader />}
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
              <NavLinkStyled
                to="general"
                state={{ from: location }}
                className={activeTab === "general" ? "active" : ""}
              >
                {t("General")}
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled
                to="specifications"
                state={{ from: location }}
                className={activeTab === "specifications" ? "active" : ""}
              >
                {t("Specifications")}
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled
                to="reviews"
                state={{ from: location }}
                className={activeTab === "reviews" ? "active" : ""}
              >
                {t("Reviews & Questions")} (324)
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled
                to="accessories"
                state={{ from: location }}
                className={activeTab === "accessories" ? "active" : ""}
              >
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
