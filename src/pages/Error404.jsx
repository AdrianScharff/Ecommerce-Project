import { Box } from "@mui/material";
import React from "react";
import ImageComponent from "../components/ImageComponent/ImageComponent";
import imageNA from "@/assets/imageNA.png";

const Error404 = () => {
  return (
    <Box
      sx={{
        mt: {
          xs: "4.2rem",
          md: "5.3rem",
          display: "flex",
          justifyContent: "center",
        },
      }}
    >
      <ImageComponent
        notFoundSrc={imageNA}
        src="https://npsmarathahalli.com/img/404bg.png"
      />
    </Box>
  );
};

export default Error404;
