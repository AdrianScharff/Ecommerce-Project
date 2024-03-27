import React, { useEffect, useState } from "react";
import { fetchAllItems } from "@/services/itemsServices";
import useCartContext from "../hooks/useCartContext";
import ItemCardsContainer from "../components/items/ItemCardsContainer";

const Home = () => {
  const [items, setItems] = useState([]);

  const { handleAddToCart, findItem, handleIncrease, handleDecrease } =
    useCartContext();

  const getAllItems = async () => {
    try {
      const allItems = await fetchAllItems();
      setItems(allItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <ItemCardsContainer items={items} />
    </>
  );
};

export default Home;
