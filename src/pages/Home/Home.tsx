import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { MainProductState } from "../../redux/types/initialEntity";
import { getMainDevises } from "../../redux/products/products-operation";

import MenuCatalogue from "../../components/MenuCatalogue/MenuCatalogue";

import CurrentOffer from "../../components/HomePage/CurrentOffer/CurrentOffer";
import BrandList from "../../components/HomePage/BrandList/BrandList";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import PageTitle from "../../components/PageTitle/PageTitle";

import {
  GarantCar,
  GarantProcent,
  GarantShield,
  GarantLayers,
} from "../../components/IconComponents/IconsCatalogue";

import {
  MainSection,
  Section,
  Container,
} from "../../components/Container/Container.styled";

import { useTranslation } from "react-i18next";

import { GarantList, GarantItem, GarantTitle, GarantText } from "./Home.styled";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMainDevises());
  }, [dispatch]);

  const mainProduct: MainProductState[] = useAppSelector((state) => {
    return state.products.productsList;
  });

  console.log("devices/main-page", mainProduct);

  return (
    <MainSection>
      <Container>
        <MenuCatalogue />
        <CurrentOffer />
        <BrandList />

        <>
          {mainProduct.map(({ title, devices }) => (
            <Section>
              <PageTitle title={title} />

              <PhoneCardList devices={devices} />
            </Section>
          ))}
        </>
        <Section>
          <PageTitle title={"Why TechEase?"} />
          <GarantList>
            <GarantItem>
              <GarantCar />
              <div>
                <GarantTitle>{t("Delivery and customer service")}</GarantTitle>
                <GarantText>{t("Fast and reliable delivery")}</GarantText>
              </div>
            </GarantItem>
            <GarantItem>
              <GarantProcent />
              <div>
                <GarantTitle>{t("Competitive prices")}</GarantTitle>
                <GarantText>{t("Offers and discounts")}</GarantText>
              </div>
            </GarantItem>
            <GarantItem>
              <GarantShield />
              <div>
                <GarantTitle>{t("Reliability and warranty")}</GarantTitle>
                <GarantText>{t("Quality assurance")}</GarantText>
              </div>
            </GarantItem>
            <GarantItem>
              <GarantLayers />
              <div>
                <GarantTitle>{t("Wide range of products")}</GarantTitle>
                <GarantText>{t("Providing a variety")}</GarantText>
              </div>
            </GarantItem>
          </GarantList>
        </Section>
      </Container>
    </MainSection>
  );
};
export default Home;
