import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedItems } from "../services/itemsServices";
import { Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ImageComponent from "../components/ImageComponent/ImageComponent";
import ImageNA from "@/assets/imageNA.png";

const ItemsBySearch = () => {
  const [searchedItems, setSearchedItems] = useState([]);

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
    <Container
      sx={{
        bgcolor: "red",
        display: "grid",
        gridTemplateColumns: { sm: "1fr", md: "repeat(4, 1fr)" },
        gap: "1rem",
        mt: { xs: "4.2rem", md: "5.3rem" },
        py: "1.5rem",
      }}
    >
      {searchedItems.map((item) => (
        <Link
          key={item.id}
          to={`/product-detail/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <Paper
            sx={{
              // height: { md: "20rem" },
              border: "2px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "1rem",
              gap: 5,
            }}
          >
            <ImageComponent
              src={item.image || item.images}
              alt={`image of ${item.product_name}`}
              style={{ height: "8rem" }}
              notFoundSrc={ImageNA}
            />

            <Typography>{item.product_name}</Typography>
            <Typography>{item.price}</Typography>
            <Typography>{item.brand}</Typography>
          </Paper>
        </Link>
      ))}
    </Container>
  );
};

export default ItemsBySearch;
