import { lazy, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import {
  useAppDispatch,
  //  useAppSelector
} from "./redux/hooks";
import { getDevises } from "./redux/products/products-operation";

// import { initialStateAuthType } from './redux/types/initialEntity';
import { currentUser } from "./redux/auth/auth-operation";
// import { GlobalStyles } from "@mui/material";
import { GlobalStyle } from "./Globalstyle";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductCard = lazy(() => import("./pages/ProductPage/ProductPage"));
const General = lazy(() => import("./components/ProductCard/General/General"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const Specifications = lazy(() => import("./components/ProductCard/Specifications/Specifications"));
const ReviewsQuestion = lazy(
  () => import("./components/ProductCard/ReviewsQuestion/ReviewsQuestion")
);
const Accessories = lazy(() => import("./components/ProductCard/Accessories/Accessories"));

const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));

const PersonalInfo = lazy(
  () => import("./components/PersonalInformation/PersonalInfo/PersonalInfo")
);
const SigninSecurity = lazy(
  () => import("./components/PersonalInformation/SigninSecurity/SigninSecurity")
);

const CookiePolicy = lazy(() => import("./pages/CookiePolicy/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));

// import {GlobalStyles} from './components/globalStyles';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDevises());
    dispatch(currentUser());
  }, [dispatch]);

  // const isRefreshing: initialStateAuthType[] = useAppSelector((state) => {
  //   return state.auth.isRefreshing;
  // });
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/product/:id" element={<ProductCard />}>
              <Route path="general" element={<General />} />
              <Route path="specifications" element={<Specifications />} />
              <Route path="reviews" element={<ReviewsQuestion />} />
              <Route path="accessories" element={<Accessories />} />
            </Route>
            {/* {isRefreshing ? (
        <b>Refresh user</b>
      ) : ( */}
            <>
              {/* <Route
            path="/signup"
            element={<RestrictedRoute component={<SignupPage />} />}
          />
          <Route
            path="/signin"
            element={<RestrictedRoute component={<SigninPage />} />}
          /> */}
              <Route path="/cart" element={<CartPage />} />
              <Route path="/user" element={<UserProfile />}>
                <Route path="personalinfo" element={<PersonalInfo />} />
                <Route path="signin&security" element={<SigninSecurity />} />
                {/* <Route path="reviews" element={<ReviewsQuestion />} />
            <Route path="accessories" element={<Accessories />} /> */}
              </Route>
            </>
            {/* )} */}
            <Route path="/cookie" element={<CookiePolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
