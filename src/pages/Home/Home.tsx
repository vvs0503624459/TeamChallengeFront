import MenuCatalogue from "../../components/MenuCatalogue/MenuCatalogue";

import CurrentOffer from "../../components/CurrentOffer/CurrentOffer";
import BrandList from "../../components/BrandList/BrandList";
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

import { GarantList, GarantItem, GarantTitle, GarantText } from "./Home.styled";

const Home = () => {
  return (
    <MainSection>
      <Container>
        <MenuCatalogue />
        <CurrentOffer />
        <BrandList />

        <Section>
          <PageTitle title={"The best price offers"} />
          <PhoneCardList />
        </Section>

        <Section>
          <PageTitle title={"Sales leaders"} />
          <PhoneCardList />
        </Section>

        <Section>
          <PageTitle title={"Why TechEase?"} />
          <GarantList>
            <GarantItem>
              <GarantCar />
              <div>
                <GarantTitle>Delivery and customer service</GarantTitle>
                <GarantText>
                  Fast and reliable delivery, as well as efficient customer
                  service to resolve any issues.
                </GarantText>
              </div>
            </GarantItem>
            <GarantItem>
              <GarantProcent />
              <div>
                <GarantTitle>Competitive prices</GarantTitle>
                <GarantText>
                  Offers and discounts that make products attractive to
                  customers.
                </GarantText>
              </div>
            </GarantItem>
            <GarantItem>
              <GarantShield />
              <div>
                <GarantTitle>Reliability and warranty</GarantTitle>
                <GarantText>
                  Quality assurance and warranties for technical devices
                </GarantText>
              </div>
            </GarantItem>
            <GarantItem>
              <GarantLayers />
              <div>
                <GarantTitle>Wide range of products</GarantTitle>
                <GarantText>
                  Providing a variety of electronics and technical devices so
                  that customers can choose depending on their needs
                </GarantText>
              </div>
            </GarantItem>
          </GarantList>
        </Section>
      </Container>
    </MainSection>
  );
};
export default Home;
