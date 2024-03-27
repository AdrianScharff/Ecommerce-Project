import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "../CartItem";
import CartIcon from "../CartIcon";
import useCartContext from "../../../hooks/useCartContext";
import useAuthContext from "../../../hooks/useAuthContext";
import { NavLink } from "react-router-dom";

export default function CartSideBar({ total }) {
  const [sidebar, setSidebar] = useState({});
  const { cartItems } = useCartContext();
  const { isAuth } = useAuthContext();

  const toggleSidebar = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebar({ ...sidebar, [anchor]: open });
  };

  const cart = (anchor) => (
    <Box
      sx={{
        position: "relative",
        px: { xs: 1, md: 3 },
      }}
      onKeyDown={toggleSidebar(anchor, false)}
    >
      <Box>
        {/* Box for "Cart" title */}
        <Box sx={{ mt: "2rem", mb: { xs: "1rem", md: "2rem" } }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Cart
          </Typography>
        </Box>

        {/* Box for cart items */}
        <Box
          id="items-container"
          sx={{
            height: { xs: "60vh", md: "61vh" },
            width: { xs: "19rem", md: "40rem" },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "scroll",
            pr: { xs: "1rem", md: "2rem" },
          }}
        >
          {isAuth &&
            cartItems.items?.map((item) => (
              <CartItem
                key={item.product_name}
                src={item.image || item.images}
                name={item.product_name}
                counter={item.counter}
                price={item.price}
              />
            ))}
        </Box>

        <Divider />
        {/* Box for total sum and confirm button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 1,
            p: { xs: "0rem", md: "0.3rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "1.9rem" },
              }}
            >
              Total:
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                fontWeight: "bold",
              }}
            >
              ${cartItems.totalSum} usd
            </Typography>
          </Box>
          <NavLink
            style={!cartItems.items?.length > 0 ? { cursor: "auto" } : {}}
            {...(cartItems.items?.length > 0 ? { to: "/checkout" } : {})}
            onClick={
              cartItems.items?.length > 0 ? toggleSidebar(anchor, false) : null
            }
          >
            <Button
              disabled={cartItems.items?.length > 0 ? false : true}
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#053262",
                ":hover": { bgcolor: "#00FF84" },
                color: "white",
                width: "100%",
                fontSize: "1.2rem",
              }}
            >
              Confirm order
            </Button>
          </NavLink>
        </Box>
      </Box>

      <IconButton
        sx={{ position: "absolute", top: "0.3rem", right: "0.3rem", color: "" }}
        onClick={toggleSidebar(anchor, false)}
      >
        <CloseIcon sx={{ fontSize: "2.5rem" }} />
      </IconButton>
    </Box>
  );

  return (
    <>
      <CartIcon toggle={toggleSidebar("right", true)} />
      <Drawer
        anchor="right"
        open={sidebar["right"]}
        onClose={toggleSidebar("right", false)}
      >
        {cart("right")}
      </Drawer>
    </>
  );
}
