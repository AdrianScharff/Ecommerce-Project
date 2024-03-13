import React from "react";
import {
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const Login = () => {
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
        // bgcolor: "blue",
      }}
    >
      <Box
        sx={{
          mt: { xs: "5rem", md: "7rem" },
          width: { xs: "90%", md: "50%" },
          //   bgcolor: "yellow",
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
            // bgcolor: "orange",
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            required
            label="Username"
            type="text"
            variant="outlined"
          />
          <TextField
            sx={{ width: "100%" }}
            required
            label="Password"
            type="password"
            variant="outlined"
          />
          <FormControl sx={{ width: "100%" }}>
            <InputLabel id="user-type-label">User type</InputLabel>
            <Select
              labelId="user-type-label"
              id="demo-simple-select"
              label="User type"
              value=""
            >
              <MenuItem value={"customer"}>CUSTOMER</MenuItem>
              <MenuItem value={"admin"}>ADMIN</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
