import React, { useEffect } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "@/services/userServices";
import useAuthContext from "@/hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
// import { getUserData } from "../services/userServices";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email")
      .required("Please write your email"),
    password: yup.string().required("Please write your password"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { loginFunction, isAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const onSubmit = async (formData) => {
    try {
      const { data, status } = await loginUser(formData);
      if (status === 200) {
        await loginFunction(data.token);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
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
      <Box
        sx={{
          mt: { xs: "4rem", md: "5rem" },
          mb: { xs: "4rem", md: "5rem" },
          width: { xs: "90%", md: "50%", lg: "40%", xl: "30%" },
        }}
      >
        <Typography variant="h4" sx={{ mb: "2rem" }}>
          Log-in
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
              label="Email"
              type="text"
              variant="outlined"
              {...register("email")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.email?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label="Password"
              type="password"
              variant="outlined"
              {...register("password")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.password?.message}
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

export default Login;
