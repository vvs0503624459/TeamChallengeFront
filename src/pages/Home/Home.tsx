import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { getMainDevises } from "@/redux/products/products-operation";
import { useProduct } from "@/redux/hooks/usePeoduct";

import MenuCatalogue from "@/components/MenuCatalogue/MenuCatalogue";

import CurrentOffer from "@/components/HomePage/CurrentOffer/CurrentOffer";
import BrandList from "@/components/HomePage/BrandList/BrandList";
import PhoneCardList from "@/components/PhoneCardList/PhoneCardList";
import PageTitle from "@/components/PageTitle/PageTitle";
import Loader from "@/components/Loader/Loader";

import {
  GarantCar,
  GarantProcent,
  GarantShield,
  GarantLayers,
} from "@/components/IconComponents/IconsCatalogue";

import {
  MainSection,
  Section,
  Container,
} from "@/components/Container/Container.styled";

import { useTranslation } from "react-i18next";

import { GarantList, GarantItem, GarantTitle, GarantText } from "./Home.styled";

const Home = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { mainProduct, isLoading } = useProduct();

  useEffect(() => {
    dispatch(getMainDevises());
  }, [dispatch]);

  // const mainProduct: MainProductState[] = useAppSelector((state) => {
  //   return state.products.productsList;
  // });

  // console.log("devices/main-page", mainProduct);

  const style = {
    fill: "#5826DA",
  };
  return (
    <MainSection>
      <Container>
        <MenuCatalogue />
        <CurrentOffer />
        <BrandList />
        {isLoading && <Loader />}
        {mainProduct && (
          <>
            {mainProduct.map(({ title, devices }) => (
              <Section>
                <PageTitle title={title} />

                <PhoneCardList devices={devices} />
              </Section>
            ))}
          </>
        )}

        <Section>
          <PageTitle title={"Why TechEase?"} />
          <GarantList>
            <GarantItem>
              <GarantCar style={style} />
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
              <GarantShield style={style} />
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
