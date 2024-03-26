import React, { useEffect, useState } from "react";
import { fetchAllItems } from "@/services/itemsServices";
// import { Container, Paper, Typography, IconButton } from "@mui/material";
// import { Box } from "@mui/material";
// import { Directions } from "@mui/icons-material";
// import imageNA from "../assets/imageNA.png";
// import loadingImg from "@/assets/loadingImg.png";
// import ImageComponent from "@/components/ImageComponent/ImageComponent";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
// import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
// import { Link } from "react-router-dom";
import useCartContext from "../hooks/useCartContext";
import ItemCardsContainer from "../components/ItemCardsContainer";

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
