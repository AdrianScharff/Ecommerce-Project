import React, { useEffect, useState } from "react";
import { Button, Box, Typography, IconButton } from "@mui/material";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { NavLink, useParams } from "react-router-dom";
import { fetchSelectedItem } from "../services/itemsServices";
import imageNA from "@/assets/imageNA.png";
import useAuthContext from "../hooks/useAuthContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import useCartContext from "../hooks/useCartContext";
import BackdropLoader from "../components/Loaders/BackdropLoader";

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { isAuth } = useAuthContext();
  const { handleAddToCart, findItem, handleIncrease, handleDecrease } =
    useCartContext();

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
      {!item.product_name && (
        <BackdropLoader message={"Getting item details..."} />
      )}
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
          imgStyles={{ height: "18rem" }}
          notFoundSrc={imageNA}
        />
        <Typography
          sx={{ fontWeight: "bold", fontSize: "2rem", color: "#053262" }}
        >
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
          <NavLink
            style={!isAuth ? { cursor: "auto" } : {}}
            {...(isAuth ? { to: "/checkout" } : {})}
          >
            <Button
              disabled={isAuth ? false : true}
              size="large"
              variant="contained"
              sx={{
                bgcolor: "#c7f6ff",
                color: "#053262",
                ":hover": { bgcolor: "#053262", color: "#c7f6ff" },
                width: "11rem",
              }}
            >
              {<span>Buy now</span>}
              <ShoppingCartCheckoutIcon sx={{ fontSize: "2rem", pl: 1 }} />
            </Button>
          </NavLink>
          {!findItem(item) ? (
            <Button
              disabled={isAuth ? false : true}
              size="large"
              variant="contained"
              sx={{
                bgcolor: "#c7f6ff",
                color: "#053262",
                ":hover": { bgcolor: "#053262", color: "#c7f6ff" },
                width: "11rem",
              }}
              onClick={() => handleAddToCart(item)}
            >
              {<span>Add to cart</span>}
              <AddShoppingCartIcon sx={{ fontSize: "2rem", pl: 1 }} />
            </Button>
          ) : (
            <Box
              // disabled={isAuth ? false : true}
              size="large"
              variant="contained"
              sx={{
                width: "11rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: 1,
                // p: "0.7rem 0 0.7rem 0.5rem",
                // py: 1,
                fontSize: "5rem",
                mt: 2,
                // bgcolor: "red",
              }}
            >
              <AddShoppingCartIcon sx={{ fontSize: "2rem" }} />
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  sx={{
                    px: 1,
                    bgcolor: "#c7f6ff",
                    color: "#053262",
                    ":hover": { bgcolor: "#053262", color: "#c7f6ff" },
                    borderRadius: "5px",
                  }}
                  onClick={() => handleDecrease(item?.product_name)}
                >
                  <RemoveOutlinedIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
                <Typography sx={{ color: "#053262", fontSize: "1.5rem" }}>
                  {findItem(item)?.counter}
                </Typography>
                <IconButton
                  sx={{
                    px: 1,
                    color: "#053262",
                    bgcolor: "#c7f6ff",
                    ":hover": { bgcolor: "#053262", color: "#c7f6ff" },
                    borderRadius: "5px",
                  }}
                  onClick={() => handleIncrease(item?.product_name)}
                >
                  <AddOutlinedIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
              </Box>
            </Box>
          )}
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
          sx={{ fontWeight: "bold", fontSize: "2rem", color: "#053262" }}
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
