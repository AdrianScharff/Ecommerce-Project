import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedItems } from "../services/itemsServices";
// import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import ImageComponent from "../components/ImageComponent/ImageComponent";
// import imageNA from "@/assets/imageNA.png";
import useCartContext from "../hooks/useCartContext";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ItemCardsContainer from "../components/ItemCardsContainer";

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
