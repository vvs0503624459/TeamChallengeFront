
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { PersonalNavList, PersonalNavItem, PersonalNavLink } from "./UserProfNavigation.styled";

const UserProfNavigation = () => {
  const location = useLocation();
  return (
    <div>
    <PersonalNavList>
      <PersonalNavItem>
        <PersonalNavLink to="personalinfo" state={{ from: location }}>
        Personal information
        </PersonalNavLink>
      </PersonalNavItem>
      <PersonalNavItem>
        <PersonalNavLink to="signin&security" state={{ from: location }}>
        Sign-in and security
        </PersonalNavLink>
      </PersonalNavItem>
      <PersonalNavItem>
        <PersonalNavLink to="reviews" state={{ from: location }}>
        Addresses
        </PersonalNavLink>
      </PersonalNavItem>
      <PersonalNavItem>
        <PersonalNavLink to="accessories" state={{ from: location }}>
        Feedback
        </PersonalNavLink>
      </PersonalNavItem>
    </PersonalNavList>
    <Outlet />
  </div>
  );
};

export default UserProfNavigation;
