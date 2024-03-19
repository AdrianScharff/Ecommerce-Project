import { Route, Routes /* Navigate */ } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import ItemsBySearch from "../pages/ItemsBySearch";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
// import useAuthContext from "@/hooks/useAuthContext";
import Secret from "../pages/Secret";
import AddProduct from "../pages/AddProduct";

const RoutesIndex = () => {
  // const { isAuth } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="secret" element={<Secret />} />
        <Route path="*" element={<Error404 />} />
        <Route path="product-by-search/:text" element={<ItemsBySearch />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route
          path="login"
          // element={!isAuth ? <Login /> : <Navigate to="/" />}
          element={<Login />}
        />
        <Route
          path="signup"
          // element={!isAuth ? <Signup /> : <Navigate to="/" />}
          element={<Signup />}
        />
      </Route>
    </Routes>
  );
};

export default RoutesIndex;
