import React, { useEffect, useState } from "react";
import { fetchAllItems } from "@/services/itemsServices";
import ItemCardsContainer from "../components/items/ItemCardsContainer";
import BackdropLoader from "../components/Loaders/BackdropLoader";

const Home = () => {
  const [items, setItems] = useState(null);

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
      {!items && <BackdropLoader />}
      <ItemCardsContainer items={items} />
    </>
  );
};

export default Home;
