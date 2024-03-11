import React, { useState } from "react";

const ImageComponent = ({ notFoundSrc, src, ...imageProps }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      {...imageProps}
      src={imgSrc || notFoundSrc}
      onError={() => {
        setImgSrc(notFoundSrc);
      }}
    />
  );
};

export default ImageComponent;
