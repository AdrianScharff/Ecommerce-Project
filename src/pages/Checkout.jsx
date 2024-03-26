import { Box, Typography } from "@mui/material";
import React from "react";

const Checkout = () => {
  return (
    <Box
      sx={{
        mt: { xs: "4.2rem", md: "5.3rem" },
      }}
    >
      <Typography
        sx={{
          pt: 20,
          textAlign: "center",
          fontSize: "5rem",
          fontWight: "bold",
        }}
      >
        Checkout
      </Typography>
    </Box>
  );
};

export default Checkout;
