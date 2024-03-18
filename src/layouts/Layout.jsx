import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { AuthProvider } from "../contexts/AuthContext";

const Layout = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </>
  );
};

export default Layout;
