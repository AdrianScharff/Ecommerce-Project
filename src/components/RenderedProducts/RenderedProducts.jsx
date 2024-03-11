import React from "react";
import { Container, Paper, Typography } from "@mui/material";

const RenderedProducts = ({items}) => {
  return (
    <Container
      sx={{
        bgcolor: "red",
        display: "grid",
        gridTemplateColumns: { sm: "1fr", md: "repeat(4, 1fr)" },
        gap: "1rem",
        mt: { xs: "4.2rem", md: "5.3rem" },
        py: "1.5rem",
      }}
    >
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/product-detail/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <Paper
            sx={{
              // height: { md: "20rem" },
              border: "2px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "1rem",
              gap: 5,
            }}
          >
            <ImageComponent
              src={item.image || item.images}
              alt={`image of ${item.product_name}`}
              style={{ height: "8rem" }}
              notFoundSrc={imageNA}
            />

            <Typography>{item.product_name}</Typography>
            <Typography>{item.price}</Typography>
            <Typography>{item.brand}</Typography>
          </Paper>
        </Link>
      ))}
    </Container>
  );
};

export default RenderedProducts;
