import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserData } from "../services/userServices";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userPayload, setUserPayload] = useState(null);
  const [userData, setUserData] = useState(null);

  // const { setCartItems } = useCartContext();

  const loginFunction = async (token) => {
    try {
      setIsAuth(true);
      localStorage.setItem("token", token);
      const response = await getUserData(token);
      // console.log(response.data);
      setUserData(response.data);
      const payload = jwtDecode(token);
      // console.log(payload);
      setUserPayload(payload);
    } catch (error) {
      throw error;
    }
  };

  const logoutFunction = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUserPayload(null);
    localStorage.removeItem("cartItems");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const loadWebpage = async (token) => {
        try {
          await loginFunction(token);
        } catch (error) {
          console.error(error);
        }
      };

      loadWebpage(token);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        loginFunction,
        logoutFunction,
        userPayload,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
