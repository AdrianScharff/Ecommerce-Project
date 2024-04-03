import { Box, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ImageNA from "@/assets/imageNA.png";
import CardCartIcon from "./CardCartIcon";

const ItemCardsContainer = ({ items }) => {
  const { findItem, handleIncrease, handleDecrease } = useCartContext();

  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
        gap: { xs: "0.5rem", md: "1rem" },
        mt: { xs: "4.2rem", md: "5.3rem" },
        py: "1.5rem",
      }}
    >
      {items?.map((item) => (
        <Link
          key={item.id}
          to={`/product-detail/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <Paper
            sx={{
              height: { xs: "20rem", md: "20rem" },
              border: "2px solid #053262",
              display: "grid",
              gridTemplateRows:
                "calc(46% - 0.225rem) calc(18% - 0.225rem) calc(18% - 0.225rem) calc(18% - 0.225rem)",
              gap: "0.3rem",
              p: { xs: "1rem", md: "1rem 1rem 0 1rem" },
              position: "relative",
            }}
          >
            {/* Box for cart icon and add / remove */}
            <Box sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
              {!findItem(item) ? (
                <CardCartIcon item={item} />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    gap: "2px",
                    py: "0.2.5rem",
                    px: "0.5rem",
                    borderRadius: "50px",
                    bgcolor: "#c7f6ff",
                    color: "#053262",
                    fontWeight: "bold",
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  <RemoveOutlinedIcon
                    onClick={() => handleDecrease(item?.product_name)}
                  />
                  <Typography sx={{ fontWeight: "medium" }}>
                    {findItem(item).counter}
                  </Typography>
                  <AddOutlinedIcon
                    onClick={() => handleIncrease(item?.product_name)}
                  />
                </Box>
              )}
            </Box>
            <ImageComponent
              src={item.image || item.images}
              alt={`image of ${item.product_name}`}
              boxStyles={{
                // bgcolor: "blue",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                // mb: 1,
              }}
              imgStyles={{
                // height: "min-content",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              notFoundSrc={ImageNA}
            />
            <Typography
              sx={{
                // bgcolor: "skyblue",
                display: "flex",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: "bold",
                color: "#053262",
              }}
            >
              {item.product_name}
            </Typography>
            <Typography
              sx={{
                // bgcolor: "yellow",
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                color: "#053262",
              }}
            >
              ${item.price}
            </Typography>
            <Typography
              sx={{
                // bgcolor: "pink",
                color: "#053262",
              }}
            >
              {item.brand}
            </Typography>
          </Paper>
        </Link>
      ))}
    </Container>
  );
};

export default ItemCardsContainer;
