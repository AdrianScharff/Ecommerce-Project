import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { useParams } from "react-router-dom";
import { fetchSelectedItem } from "../services/itemsServices";
import imageNA from "@/assets/imageNA.png";
import useAuthContext from "../hooks/useAuthContext";

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { isAuth } = useAuthContext();

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
            fontSize: "1.5rem",
            ...(item.description?.length < 38 && { textAlign: "center" }),
          }}
        >
          {item.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Button
            disabled={isAuth ? false : true}
            size="large"
            variant="contained"
          >
            Buy now
          </Button>
          {!isAuth && (
            <Box
              sx={{
                color: "red",
                width: "60%",
                display: "flex",
                gap: "0.3rem",
              }}
            >
              <Typography sx={{ fontSize: "0.8rem" }}>*</Typography>

              <Typography sx={{ fontSize: "0.8rem" }}>
                Sign up or log in to buy this product
              </Typography>
            </Box>
          )}
        </Box>
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
