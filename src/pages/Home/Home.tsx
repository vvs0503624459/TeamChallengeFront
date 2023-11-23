import MenuCatalogue from "../../components/MenuCatalogue/MenuCatalogue";

import CurrentOffer from "../../components/CurrentOffer/CurrentOffer";
import BrandList from "../../components/BrandList/BrandList";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";

import {
  MainSection,
  Section,
  Container,
} from "../../components/Container/Container.styled";
import PageTitle from "../../components/PageTitle/PageTitle";

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

        <section>
          <PageTitle title={"Sales leaders"} />
          <PhoneCardList />
        </section>
      </Container>
    </MainSection>
  );
};
export default Home;
