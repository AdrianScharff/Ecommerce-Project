import React from "react";
import { TextField, Box } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{ mt: { xs: "4.2rem", md: "5.3rem" } }}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <TextField required label="Username" type="text" variant="outlined" />
        <TextField
          required
          label="Password"
          type="password"
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default Login;
