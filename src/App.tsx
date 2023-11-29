import "./App.scss";
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignupPage from "./pages/SignupPage/SignupPage";
import SigninPage from "./pages/SigninPage/SigninPage";
// import { Home } from "./pages/Home/Home";
// import ProductCard from "./pages/ProductCard/ProductCard";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductCard = lazy(() => import("./pages/ProductPage/ProductPage"));
const General = lazy(() => import("./components/ProductCard/General/General"));
const Specifications = lazy(() =>
  import("./components/ProductCard/Specifications/Specifications")
);
const ReviewsQuestion = lazy(() =>
  import("./components/ProductCard/ReviewsQuestion/ReviewsQuestion")
);
const Accessories = lazy(() =>
  import("./components/ProductCard/Accessories/Accessories")
);

// import {GlobalStyles} from './components/globalStyles';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          <Route index element={<Home />} />

          <Route path="/product/:id" element={<ProductCard />}>
            <Route path="general" element={<General />} />
            <Route path="specifications" element={<Specifications />} />
            <Route path="reviews" element={<ReviewsQuestion />} />
            <Route path="accessories" element={<Accessories />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      {/* <GlobalStyles /> */}
    </>
  );
}

export default App;
