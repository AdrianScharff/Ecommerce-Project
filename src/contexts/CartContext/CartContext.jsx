import { createContext, useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({ items: [], totalSum: 0 });
  const { isAuth } = useAuthContext();

  const handleAddToCart = (product) => {
    if (isAuth) {
      if (findItem(product)) {
        return;
      }
      const prevCartItems = { ...cartItems };
      localStorage.setItem(
        "cartItems",
        JSON.stringify({
          items: [...prevCartItems.items, { ...product, counter: 1 }],
          totalSum: prevCartItems.totalSum + product.price,
        })
      );
      setCartItems((prev) => ({
        items: [...prev.items, { ...product, counter: 1 }],
        totalSum: prev.totalSum + product.price,
      }));
    }
  };

  const handleIncrease = (productName) => {
    const itemsIncreased = cartItems.items.map((item) => {
      if (item.product_name === productName) {
        return { ...item, counter: item.counter + 1 };
      }
      return item;
    });

    const prevCart = { ...cartItems };
    const item = prevCart.items.find(
      (item) => item.product_name === productName
    );

    setCartItems((prev) => ({
      items: itemsIncreased,
      totalSum: prev.totalSum + item.price,
    }));
    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        items: itemsIncreased,
        totalSum: prevCart.totalSum + item.price,
      })
    );
  };

  const handleDecrease = (productName) => {
    const itemsDecreased = cartItems.items.map((item) => {
      if (item.product_name === productName) {
        return { ...item, counter: item.counter - 1 };
      }
      return item;
    });

    const prevCart = { ...cartItems };
    const item = prevCart.items.find(
      (item) => item.product_name === productName
    );

    setCartItems((prev) => ({
      items: itemsDecreased,
      totalSum: prev.totalSum - item.price,
    }));
    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        items: itemsDecreased,
        totalSum: prevCart.totalSum - item.price,
      })
    );
  };

  const findItem = (cartProduct) => {
    return cartItems.items?.find(
      (item) => item.product_name === cartProduct.product_name
    );
  };

  const deleteItem = (itemName) => {
    const prevCart = { ...cartItems };
    const filteredItems = prevCart.items.filter(
      (item) => item.product_name !== itemName
    );

    const deletedItem = prevCart.items.find(
      (item) => item.product_name === itemName
    );

    setCartItems({
      items: filteredItems,
      totalSum: prevCart.totalSum - deletedItem.counter * deletedItem.price,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify({
        items: filteredItems,
        totalSum: prevCart.totalSum - deletedItem.counter * deletedItem.price,
      })
    );
  };

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
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
