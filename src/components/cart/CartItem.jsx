import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import imageNA from "@/assets/imageNA.png";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import useCartContext from "../../hooks/useCartContext";

const CartItem = ({ src, name, counter, price }) => {
  const { deleteItem, handleIncrease, handleDecrease } = useCartContext();

  return (
    <Box>
      <Box
        id="one-item-container"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, md: 4 },
          pb: 1,
        }}
      >
        <ImageComponent
          src={src}
          notFoundSrc={imageNA}
          boxStyles={{ height: { xs: "5rem", md: "8rem" } }}
          imgStyles={{ height: "100%" }}
        />

        <Box
          id="name-and-counter"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.2rem",
            width: { xs: "7rem", md: "15rem" },
          }}
        >
          <Typography sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}>
            {name}
          </Typography>
          {/* Box for cart icon */}
          <Box
            id="counter"
            sx={{
              display: "flex",
              bgcolor: "#043363",
              color: "white",
              borderRadius: "50px",
              px: "0.5rem",
              py: "0.2.5rem",
              width: "fit-content",
            }}
          >
            <IconButton
              sx={{ padding: 0, color: "white" }}
              onClick={() => handleDecrease(name)}
            >
              <RemoveOutlinedIcon />
            </IconButton>
            <Typography>{counter}</Typography>
            <IconButton
              sx={{ padding: 0, color: "white" }}
              onClick={() => handleIncrease(name)}
            >
              <AddOutlinedIcon />
            </IconButton>
          </Box>
        </Box>

        <Typography sx={{ fontSize: "1.6rem", fontWeight: "bold" }}>
          ${price}
        </Typography>

        <IconButton sx={{ padding: 0 }} onClick={() => deleteItem(name)}>
          <DeleteIcon />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
};

export default CartItem;
