import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuthContext from "@/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { addNewItem } from "../services/itemsServices";
import BackdropLoader from "../components/Loaders/BackdropLoader";

const categories = [
  "Kids",
  "Shoes",
  "Computers",
  "Grocery",
  "Automotive",
  "Toys",
  "Tools",
  "Health",
  "Sports",
  "Outdoors",
  "Jewelery",
  "Movies",
  "Industrial",
  "Music",
  "Baby",
  "Beauty",
  "Games",
  "Garden",
  "Home",
  "Electronics",
  "Books",
  "Clothing",
];

const schema = yup
  .object({
    product_name: yup.string().required("Please write the name of the product"),
    description: yup
      .string()
      .required("Please write a description for the product"),
    price: yup.number().required("Please write the price of the product"),
    category: yup
      .mixed()
      .oneOf(categories, "Please select a category")
      .defined(),
    brand: yup.string().required("Please write the brand name"),
    image: yup.string().required("Please add an image source"),
  })
  .required();

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { userData, isAuth } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuth || userData?.role !== "ADMIN") {
      navigate("/");
    }
  }, [isAuth, userData]);

  const onSubmit = async (formData) => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        const { data, status } = await addNewItem(formData, token);
        console.log(status);
        if (status === 200) {
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        mt: {
          xs: "4.1rem",
          md: "5.3rem",
        },
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {isLoading && <BackdropLoader message={"Adding new item..."} />}
      <Box
        sx={{
          mt: { xs: "4rem", md: "5rem" },
          mb: { xs: "4rem", md: "5rem" },
          width: { xs: "90%", md: "50%", lg: "40%", xl: "30%" },
        }}
      >
        <Typography variant="h4" sx={{ mb: "2rem" }}>
          Add a new product
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            p: "2rem",
            border: "2px solid #3a36361c",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label="Product name"
              type="text"
              variant="outlined"
              {...register("product_name")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.product_name?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label="Description"
              type="text"
              variant="outlined"
              {...register("description")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.description?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label="Price"
              type="text"
              variant="outlined"
              {...register("price")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.price?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                defaultValue=""
                {...register("category")}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Typography sx={{ color: "red" }}>
              {errors.category?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label="Brand"
              type="text"
              variant="outlined"
              {...register("brand")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.brand?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label="Image source"
              type="text"
              variant="outlined"
              {...register("image")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.image?.message}
            </Typography>
          </Box>

          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
