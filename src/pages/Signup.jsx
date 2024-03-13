import React from "react";
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

const schema = yup
  .object({
    firstName: yup.string().required("Please write your first name"),
    lastName: yup.string().required("Please write your last name"),
    gender: yup
      .mixed()
      .oneOf(["M", "F", "O"], "Please select a gender")
      .defined(),
    email: yup
      .string()
      .email("Invalid email")
      .required("Please write your email"),
    password: yup
      .string()
      .required("Please write your password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/,
        "Password must contain at least 8 characters, one number, one uppercase letter, one lowercase letter amd one special character"
      ),
    role: yup
      .mixed()
      .oneOf(["admin", "customer"], "Please select a role")
      .defined(),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
          width: { xs: "90%", md: "50%" },
        }}
      >
        <Typography variant="h4" sx={{ mb: "2rem" }}>
          Sign-up
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
              label="First name"
              type="text"
              variant="outlined"
              {...register("firstName")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.firstName?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <TextField
              sx={{ width: "100%" }}
              label="Last name"
              type="text"
              variant="outlined"
              {...register("lastName")}
            />
            <Typography sx={{ color: "red" }}>
              {errors.lastName?.message}
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                label="Gender"
                defaultValue=""
                {...register("gender")}
              >
                <MenuItem value={"M"}>Male</MenuItem>
                <MenuItem value={"F"}>Female</MenuItem>
                <MenuItem value={"O"}>Others</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ color: "red" }}>
              {errors.gender?.message}
            </Typography>
          </Box>

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

          <Box sx={{ width: "100%" }}>
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                label="Role"
                defaultValue=""
                {...register("role")}
              >
                <MenuItem value={"customer"}>CUSTOMER</MenuItem>
                <MenuItem value={"admin"}>ADMIN</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ color: "red" }}>
              {errors.role?.message}
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

export default Signup;
