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
import { useForm } from "react-hook-form";

const pages = ["Home", "About", "Contact"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const authOptions = ["Log-in", "Sign-up"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElAuth, setAnchorElAuth] = useState(null);
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
  const handleOpenAuthMenu = (event) => {
    setAnchorElAuth(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseAuthMenu = () => {
    setAnchorElAuth(null);
  };

  const onSubmitDesk = (data) => {
    navigate(`/product-by-search/${data.searchProductDesk}`);
  };

  const onSubmitMobile = (data) => {
    navigate(`/product-by-search/${data.searchProductMobile}`);
  };

  // const optionIsActive = (isActive, isPending) => {
  //   return isActive ? "active" : "";
  // };

  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: { xs: "0.5rem", md: 0 } }}>
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
            {/* Logo for desktop */}
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
                    onClick={handleCloseNavMenu}
                  >
                    {({ isActive }) => (
                      <MenuItem>
                        <Button>
                          <div className={isActive ? "active" : ""}>{page}</div>
                        </Button>
                      </MenuItem>
                    )}
                  </NavLink>
                ))}
              </Menu>
            </Box>
            {/* Logo for mobile */}
            {/* <Box
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
            </Box> */}
            {/* Input field for mobile */}
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                  bgcolor: "purple",
                },
                justifyContent: "center",
                // width: "15rem",
                flexGrow: 1,
                px: "1.5rem",
              }}
            >
              <form onSubmit={handleSubmit(onSubmitMobile)}>
                <Box sx={{ display: "flex", mr: 2 }}>
                  <TextField
                    sx={{
                      bgcolor: "white",
                      // width: "80%",
                      // mr: 2,
                    }}
                    label="Search product"
                    variant="outlined"
                    {...register("searchProductMobile")}
                  />
                  <Button variant="contained" type="submit" size="small">
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
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page}
                  to={page !== "Home" ? `/${page.toLowerCase()}` : ""}
                  style={{ textDecoration: "none" }}
                  onClick={handleCloseNavMenu}
                >
                  {({ isActive }) => (
                    <Button sx={{ my: 2, color: "white" }}>
                      <div className={isActive ? "active" : ""}>{page}</div>
                    </Button>
                  )}
                </NavLink>
              ))}
            </Box>
            {/* Box for user settings */}
            {/* <Box sx={{ flexGrow: 0 }}>
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
            </Box> */}
            {/* Button for log-in / sign-up */}
            {/* <Button
              sx={{
                width: { xs: "3rem", md: "6rem" },
                bgcolor: "white",
                color: "black",
                fontSize: { xs: "0.7rem", md: "0.8rem" },
                ":hover": { bgcolor: "red" },
              }}
            >
              Sign-up / Log-in
            </Button> */}

            <Box>
              <Button
                size="small"
                onClick={handleOpenAuthMenu}
                sx={{
                  width: { xs: "1rem", md: "6rem" },
                  bgcolor: "white",
                  ":hover": { bgcolor: "white" },
                  fontSize: { xs: "0.6rem", md: "0.8rem" },
                  color: "primary",
                }}
                variant="outlined"
              >
                Sign-up / Log-in
              </Button>
              <Menu
                anchorEl={anchorElAuth}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElAuth)}
                onClose={handleCloseAuthMenu}
              >
                {authOptions.map((option) => (
                  <NavLink
                    key={option}
                    to={option === "Log-in" ? `/login` : "signup"}
                    style={{ textDecoration: "none" }}
                    onClick={handleCloseAuthMenu}
                  >
                    {({ isActive }) => (
                      <MenuItem>
                        <Button>
                          <div className={isActive ? "active" : ""}>
                            {option}
                          </div>
                        </Button>
                      </MenuItem>
                    )}
                  </NavLink>
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
