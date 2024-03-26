import { createContext, useEffect, useState } from "react";
// import { AuthProvider } from "../AuthContext";
import useAuthContext from "../../hooks/useAuthContext";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { isAuth } = useAuthContext();

  const handleAddToCart = (product) => {
    if (isAuth) {
      if (
        findItem(product)
        // cartItems.some((item) => item.product_name === product.product_name)
      ) {
        return;
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, { ...product, counter: 1 }])
      );
      setCartItems((prev) => [...prev, { ...product, counter: 1 }]);
    }
  };

  const handleIncrease = (productName) => {
    const cartWithIncrease = cartItems.map((item) => {
      if (item.product_name === productName) {
        return { ...item, counter: item.counter + 1 };
      }
      return item;
    });

    setCartItems(cartWithIncrease);
    localStorage.setItem("cartItems", JSON.stringify(cartWithIncrease));
  };

  const handleDecrease = (productName) => {
    const cartWithDecrease = cartItems.map((item) => {
      if (item.product_name === productName) {
        return { ...item, counter: item.counter - 1 };
      }
      return item;
    });

    setCartItems(cartWithDecrease);
    localStorage.setItem("cartItems", JSON.stringify(cartWithDecrease));
  };

  const findItem = (cartProduct) => {
    return cartItems.find(
      (item) => item.product_name === cartProduct.product_name
    );
  };

  const deleteItem = (itemName) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product_name !== itemName)
    );
    const localItems = JSON.parse(localStorage.getItem("cartItems"));
    const filteredLocalItems = localItems.filter(
      (item) => item.product_name !== itemName
    );
    localStorage.setItem("cartItems", JSON.stringify(filteredLocalItems));
  };

  useEffect(() => {
    const items = localStorage.getItem("cartItems");
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        findItem,
        deleteItem,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
