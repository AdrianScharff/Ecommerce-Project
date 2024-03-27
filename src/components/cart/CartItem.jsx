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
    <Box
      sx={{
        // bgcolor: "navy",
        height: { xs: "7rem", md: "8rem" },
      }}
    >
      {/* Box for all one item content without the divider */}
      <Box
        id="one-item-container"
        sx={{
          display: "grid",
          gridTemplateColumns:
            "calc(29% - 0.225rem) calc(44% - 0.225rem) calc(19% - 0.225rem) calc(8% - 0.225rem)",
          alignItems: "center",
          // gap: { xs: 1, md: 4 },
          gap: "0.3rem",
          pb: 1,
        }}
      >
        <ImageComponent
          src={src}
          notFoundSrc={imageNA}
          boxStyles={{
            // bgcolor: "blue",
            height: { xs: "6rem", md: "7rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          imgStyles={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
        {/* Box for title and counter */}
        <Box
          id="name-and-counter"
          sx={{
            // bgcolor: "pink",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.2rem",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, textAlign: "center" }}
          >
            {name}
          </Typography>
          {/* Box for counter */}
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

        <Typography
          sx={{
            // bgcolor: "skyblue",
            fontSize: { xs: "1.2rem", md: "1.6rem" },
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          ${price}
        </Typography>

        <IconButton
          sx={{
            // bgcolor: "yellow",
            padding: 0,
          }}
          onClick={() => deleteItem(name)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      <Divider />
    </Box>
  );
};

export default CartItem;
