import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCartContext from "../../hooks/useCartContext";

const CartIcon = ({ toggle }) => {
  const { cartItems } = useCartContext();

  return (
    <IconButton
      onClick={toggle}
      sx={{
        borderRadius: 0,
        display: "flex",
        position: "relative",
        padding: 0,
      }}
    >
      <ShoppingCartIcon sx={{ fontSize: "2.3rem", color: "white", mt: "0.6rem" }} />
      <Box
        sx={{
          position: "absolute",
          bgcolor: "#00FF84",
          top: "0.02rem",
          right: "0.4rem",
          borderRadius: "50px",
          px: "0.4rem",
        }}
      >
        <Typography
          sx={{
            color: "#053262",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          {cartItems.items?.length || 0}
        </Typography>
      </Box>
    </IconButton>
  );
};

export default CartIcon;
