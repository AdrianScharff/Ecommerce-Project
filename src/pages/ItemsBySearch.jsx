import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedItems } from "../services/itemsServices";
import ItemCardsContainer from "../components/items/ItemCardsContainer";
import BackdropLoader from "../components/Loaders/BackdropLoader";

const ItemsBySearch = () => {
  const [searchedItems, setSearchedItems] = useState(null);

  const { text } = useParams();

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
      {!searchedItems && <BackdropLoader message={"Fetching items..."} />}
      <ItemCardsContainer items={searchedItems} />;
    </>
  );
};

export default ItemsBySearch;
