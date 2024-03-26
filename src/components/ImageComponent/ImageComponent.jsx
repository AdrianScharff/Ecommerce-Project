import { Box } from "@mui/material";
import React, { useState } from "react";

const ImageComponent = ({
  notFoundSrc,
  src,
  boxStyles,
  imgStyles,
  ...imageProps
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Box sx={{...boxStyles }}>
      <img
        {...imageProps}
        src={imgSrc || notFoundSrc}
        onError={() => {
          setImgSrc(notFoundSrc);
        }}
        style={{...imgStyles }}
      />
    </Box>
  );
};

export default ImageComponent;
