import MenuCatalogue from "../../components/MenuCatalogue/MenuCatalogue";
import BrandList from "../../components/BrandList/BrandList";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";

import { Container } from "../../components/Container/Container.styled";
import PageTitle from "../../components/PageTitle/PageTitle";

export const Home = () => {
  return (
    <>
      <Container>
        <section>
          <MenuCatalogue />
        </section>
        <section>
          <PageTitle title={"Current offers"} />
          <BrandList />
        </section>

        <section>
          <PageTitle title={"Popular brands"} />
          <BrandList />
        </section>

        <section>
          <Container>
            <PageTitle title={"The best price offers"} />
            <PhoneCardList />
          </Container>
        </section>

        <section>
          <Container>
            <PageTitle title={"Sales leaders"} />
            <PhoneCardList />
          </Container>
        </section>
      </Container>
    </>
  );
};
