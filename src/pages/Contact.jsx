import { Box, Typography } from "@mui/material";
import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const { isAuth } = useAuthContext();

  return (
    <>
      {isAuth ? (
        <Box sx={{ mt: { xs: "4.2rem", md: "5.3rem" } }}>
          <Typography sx={{ fontSize: "5rem", textAlign: "center" }}>
            Contact
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            mt: { xs: "4.2rem", md: "5.3rem" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "20rem",
            }}
          >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Please log-in or sign-up to see this page
            </Typography>
            <Typography variant="h4">
              <NavLink to="/login">Log in here</NavLink>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Contact;
