import { useContext } from "react";
import { CartContext } from "../contexts/CartContext/CartContext";

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "El useCartContext debe ser llamado dentro del CartContextProvider"
    );
  }

  return context;
};

export default useCartContext;
