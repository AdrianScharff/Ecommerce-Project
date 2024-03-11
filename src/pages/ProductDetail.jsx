import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { useParams } from "react-router-dom";
import { fetchSelectedItem } from "../services/fetchServices";
import imageNA from "@/assets/imageNA.png";

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  const getItem = async (id) => {
    try {
      const item = await fetchSelectedItem(id);
      setItem(item);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItem(id);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { xs: "4.2rem", md: "5.3rem" },
        py: "3rem",
      }}
    >
      <Box
        sx={{
          width: { md: "50%" },
          px: { xs: "2rem", md: "0" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          // bgcolor: "green",
        }}
      >
        <ImageComponent
          src={item.image || item.images}
          alt={`image of ${item.product_name}`}
          style={{ height: "18rem" }}
          notFoundSrc={imageNA}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
          {item.product_name}
        </Typography>
        <Typography
          sx={{
            width: { md: "60%", xl: "40%" },
            // bgcolor: "yellow",
            fontSize: "1.5rem",
          }}
        >
          {item.description}
        </Typography>
        <Button>Buy now</Button>
        <Typography
          sx={{ fontWeight: "bold", fontSize: "2rem", color: "blue" }}
        >
          ${item.price}
        </Typography>
        <Typography>{item.category}</Typography>
        <Typography>{item.brand}</Typography>
        <Typography>Created at: {item.createdAt}</Typography>
        <Typography>Last update: {item.updatedAt}</Typography>
      </Box>
    </Box>
  );
};

export default ProductDetail;
