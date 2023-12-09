import { useLocation } from "react-router-dom";
import { NavList, NavItem, NavLink } from "./../../../pages/ProductPage/ProductPage.styled";
import { Outlet } from "react-router-dom";


const ReviewsQuestion = () => {
      const location = useLocation();
  return (
    <>
      <NavList>
        <NavItem>
          <NavLink to="reviews" state={{ from: location }}>
            Reviews
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="reviews/questions" state={{ from: location }}>
            Questions
          </NavLink>
        </NavItem>
      </NavList>
      <Outlet />
    </>
  );
};
export default ReviewsQuestion;
