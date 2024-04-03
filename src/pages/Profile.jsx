import { Box, Typography } from "@mui/material";
import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { userData, isAuth } = useAuthContext();

  return (
    <>
      {isAuth ? (
        <Box
          sx={{
            mt: { xs: "4.2rem", md: "5.3rem" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#053262",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", mt: "3rem" }}>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", md: "3rem" },
                  color: "#053262",
                }}
              >
                User:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", md: "3rem" },
                  color: "#053262",
                }}
              >
                {userData?.first_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                Email:
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                {userData?.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                First name:
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                {userData?.first_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                Last name:
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                {userData?.last_name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                Gender:
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                {userData?.gender}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                Role:
              </Typography>
              <Typography sx={{ fontSize: { xs: "1.3rem", md: "2rem" } }}>
                {userData?.role}
              </Typography>
            </Box>
          </Box>
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

export default Profile;
