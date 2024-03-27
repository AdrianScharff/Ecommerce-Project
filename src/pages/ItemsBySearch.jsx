import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedItems } from "../services/itemsServices";
import ItemCardsContainer from "../components/items/ItemCardsContainer";

const ItemsBySearch = () => {
  const [searchedItems, setSearchedItems] = useState([]);

  const { text } = useParams();

  // const { findItem } = useCartContext();

  const getSearchedItems = async (text) => {
    try {
      const fetchedItems = await fetchSearchedItems(text);
      setSearchedItems(fetchedItems);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSearchedItems(text);
  }, [text]);

  return (
    <>
      <ItemCardsContainer items={searchedItems} />;
    </>
  );
};

export default ItemsBySearch;
