import "./App.scss";
import { lazy, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import { useAppDispatch } from "./redux/hooks";
import { getDevises } from "./redux/products/products-operation";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductCard = lazy(() => import("./pages/ProductPage/ProductPage"));
const General = lazy(() => import("./components/ProductCard/General/General"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const Specifications = lazy(() =>
  import("./components/ProductCard/Specifications/Specifications")
);
const ReviewsQuestion = lazy(() =>
  import("./components/ProductCard/ReviewsQuestion/ReviewsQuestion")
);
const Accessories = lazy(() =>
  import("./components/ProductCard/Accessories/Accessories")
);

const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));

const PersonalInfo = lazy(() =>
  import("./components/PersonalInformation/PersonalInfo/PersonalInfo")
);
const SigninSecurity = lazy(() =>
  import("./components/PersonalInformation/SigninSecurity/SigninSecurity")
);

// import {GlobalStyles} from './components/globalStyles';

function App() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDevises());
  }, [dispatch]);
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
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserProfile />}>
              <Route path="personalinfo" element={<PersonalInfo />} />
              <Route path="signin&security" element={<SigninSecurity />} />
              {/* <Route path="reviews" element={<ReviewsQuestion />} />
            <Route path="accessories" element={<Accessories />} /> */}
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

        {/* <GlobalStyles /> */}
      </>
    </ThemeProvider>
  );
}

export default App;
