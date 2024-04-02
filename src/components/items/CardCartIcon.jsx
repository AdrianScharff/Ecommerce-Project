import { Box, IconButton, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import useCartContext from "../../hooks/useCartContext";

const CardCartIcon = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useAuthContext();
  const { handleAddToCart } = useCartContext();

  const openCartWarning = () => {
    setIsOpen(true);
    setTimeout(() => {
      closeCartWarning();
    }, 2500);
  };

  const closeCartWarning = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        sx={{
          bgcolor: "#c7f6ff",
          color: "#053262",
          ":hover": { bgcolor: "#053262", color: "#c7f6ff" },
        }}
        onClick={(e) => {
          e.preventDefault();
          !isAuth ? openCartWarning() : handleAddToCart(item);
        }}
      >
        <ShoppingCartOutlinedIcon />
      </IconButton>
      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "2.7rem",
            left: { xs: "-6rem", md: 0 },
            bgcolor: "white",
            width: { xs: "8rem", md: "10rem" },
            border: "1px solid #053262",
            p: 1,
            zIndex: 10,
            borderRadius: "10px",
          }}
          onClick={(e) => e.preventDefault()}
        >
          <Typography sx={{ color: "#053262" }}>
            * Log in or sign up to add this product to the cart
          </Typography>
        </Box>
      )}
    </>
  );
};

export default CardCartIcon;
