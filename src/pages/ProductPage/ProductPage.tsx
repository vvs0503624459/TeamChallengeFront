// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { MainProductState } from "../../redux/types/initialEntity";
// import { getMainDevises } from "../../redux/products/products-operation";

import { useLocation, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import PageTitle from "../../components/PageTitle/PageTitle";
// import PhoneCardList from "../../components/PhoneCardList/PhoneCardList";
import StarRating from "../../components/StarRating/StarRating";
import {
  MainSection,
  // Section,
  Container,
} from "../../components/Container/Container.styled";

import { NavList, NavItem, NavLink } from "./ProductPage.styled";
import general from "../../data/general.json";

const ProductCard = () => {
  const location = useLocation();
  const { id } = useParams();

  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getMainDevises());
  // }, [dispatch]);

  // const mainProduct: MainProductState[] = useAppSelector((state) => {
  //   return state.products.productsList;
  // });


  return (
    <MainSection>
      <Container>
        <div>
          {general
            .filter((obj) => obj.id === id)
            .map(({ maintitle, comments }) => (
              <div key={id}>
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
              <NavLink
                to="reviews"
                state={{ from: location }}
              >
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

        {/* <>
          {mainProduct.map(({ title, devices }) => (
            <Section>
              <PageTitle title={title} />

              <PhoneCardList devices={devices} />
            </Section>
          ))}
        </> */}
      </Container>
    </MainSection>
  );
};
export default ProductCard;
