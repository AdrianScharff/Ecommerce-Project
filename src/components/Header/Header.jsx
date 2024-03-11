import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  TextField,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ecommerceLogo from "../../assets/ecommerce-logo.png";
import { useForm, Controller } from "react-hook-form";

const pages = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onSubmitDesk = (data) => {
    navigate(`/product-by-search/${data.searchProductDesk}`);
  };

  const onSubmitMobile = (data) => {
    navigate(`/product-by-search/${data.searchProductMobile}`);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <Link to="/">
                <img
                  src={ecommerceLogo}
                  alt="ecommerce logo"
                  style={{ height: "5rem" }}
                />
              </Link>
            </Box>
            {/* Input field for desktop */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  bgcolor: "yellow",
                },
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <form onSubmit={handleSubmit(onSubmitDesk)}>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    sx={{
                      bgcolor: "white",
                      width: "80%",
                    }}
                    label="Search product"
                    variant="outlined"
                    {...register("searchProductDesk")}
                  />
                  <Button variant="contained" type="submit">
                    Search
                  </Button>
                </Box>
              </form>
            </Box>
            {/* ---- */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* pages for mobile */}
                {pages.map((page) => (
                  <NavLink
                    key={page}
                    to={page !== "Home" ? `/${page.toLowerCase()}` : ""}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none", bgcolor: "red" },
                mr: 1,
                flexGrow: 1,
              }}
            >
              <Link to="/">
                <img
                  src={ecommerceLogo}
                  alt="ecommerce logo"
                  style={{ height: "4rem" }}
                />
              </Link>
            </Box>
            {/* Input field for mobile */}
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                  bgcolor: "purple",
                },
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <form onSubmit={handleSubmit(onSubmitMobile)}>
                <Box sx={{ display: "flex", mr: 2 }}>
                  <TextField
                    sx={{
                      bgcolor: "white",
                      width: "80%",
                      // mr: 2,
                    }}
                    label="Search product"
                    variant="outlined"
                    {...register("searchProductMobile")}
                  />
                  <Button variant="contained" type="submit">
                    Search
                  </Button>
                </Box>
              </form>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            {/* <Typography
              // variant="h5"
              // noWrap
              // component="a"
              // href="#app-bar-with-responsive-menu"
              sx={{
                // mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
            {/* pages for desktop */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                pr: 4,
                // bgcolor: "purple",
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page}
                  to={page !== "Home" ? `/${page.toLowerCase()}` : ""}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
