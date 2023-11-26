import { useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import StarRating from "../../components/StarRating/StarRating";
import {
  MainSection,
  Section,
  Container,
} from "../../components/Container/Container.styled";

import { NavList, NavItem, NavLink } from "./ProductPage.styled";
import general from "../../data/general.json";

const ProductCard = () => {
  const location = useLocation();

  return (
    <MainSection>
      <Container>
        <div>
          {general.map(({ maintitle, comments }) => (
            <div>
              <h1>{maintitle}</h1>
              <StarRating />
              <p>{comments}</p>
            </div>
          ))}
        </div>

        <div>
          <NavList>
            <NavItem>
              <NavLink to="general" state={{ from: location }}>
                General
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="specifications" state={{ from: location }}>
                Specifications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="reviews" state={{ from: location }}>
                Reviews & Questions (324)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="accessories" state={{ from: location }}>
                Accessories
              </NavLink>
            </NavItem>
          </NavList>
          <Outlet />
        </div>

        <Section>
          <PageTitle title={"Recommendations"} />
          <PhoneCardList />
        </Section>

        <section>
          <PageTitle title={"Recently viewed"} />
          <PhoneCardList />
        </section>
      </Container>
    </MainSection>
  );
};
export default ProductCard;
