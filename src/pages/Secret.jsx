import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Secret = () => {
  const { isAuth } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      (
      <Box sx={{ mt: { xs: "4.2rem", md: "5.3rem" } }}>
        <Box sx={{ mt: "10rem" }}>
          <Typography
            variant="h1"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            This is the Secret page
          </Typography>
        </Box>
      </Box>
      )
    </>
  );
};

export default Secret;
