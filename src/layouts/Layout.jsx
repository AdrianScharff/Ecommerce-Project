import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { AuthProvider } from "../contexts/AuthContext";
import { CartContextProvider } from "../contexts/CartContext/CartContext";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <CartContextProvider>
          <Header />
          <Outlet />
        </CartContextProvider>
      </AuthProvider>
    </>
  );
};

export default Layout;
