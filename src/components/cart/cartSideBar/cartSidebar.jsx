import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import CartItem from "@/components/cart/CartItem";
import CartItem from "../CartItem";
import CartIcon from "../CartIcon";
// import CartIcon from "@/components/cart/CartIcon";
import useCartContext from "../../../hooks/useCartContext";
import useAuthContext from "../../../hooks/useAuthContext";

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
        px: 3,
      }}
      onKeyDown={toggleSidebar(anchor, false)}
    >
      <Box>
        <Box sx={{ mt: "2.5rem", mb: "2rem" }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Cart
          </Typography>
        </Box>

        <Box
          id="items-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            height: { xs: "60vh", md: "61vh" },
            overflowY: "scroll",
          }}
        >
          {isAuth &&
            cartItems.map((item) => (
              <CartItem
                key={item.product_name}
                src={item.image || item.images}
                name={item.product_name}
                counter={item.counter}
                price={item.price}
              />
            ))}
          {/* <CartItem
            src="https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg"
            name="Awesome Granite Bacon"
            counter={3}
            price={962}
          />
          <CartItem
            src="https://i.pinimg.com/originals/ee/f3/f4/eef3f4858339074c0bba500abfbf6850.jpg"
            name="Unbranded Steel Fish"
            counter={6}
            price={643}
          /> */}
        </Box>

        <Divider />
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
              ${total} usd
            </Typography>
          </Box>
          {/* items.length > 0 && */}
          <Button
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
            {/* isAuth ? Confirm order : Login to confirm order */}
            Confirm order
          </Button>
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
