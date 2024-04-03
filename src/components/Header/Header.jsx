import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  TextField,
  InputBase,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ecommerceLogo from "../../assets/ecommerce-logo.png";
import { useForm } from "react-hook-form";
import useAuthContext from "@/hooks/useAuthContext";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
// import CartSideBar from "../cartSideBar/cartSidebar";
// import CartSideBar from "../cart/cartSideBar/cartSidebar";
import CartSideBar from "../cart/cartSideBar/cartSidebar";
import useCartContext from "../../hooks/useCartContext";

const pages = ["Home", "About", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
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

  const { isAuth, logoutFunction, userData } = useAuthContext();
  const { setCartItems } = useCartContext();

  return (
    <div>
      <AppBar position="fixed">
        <Box
          sx={{
            py: { xs: "0.5rem", md: "0.4rem" },
            px: { xs: ".5rem", md: "1.5rem", xl: "3rem" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: "#053262",
          }}
        >
          {/* Logo for desktop */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              // bgcolor: "#053262",
              // height: "8rem",
              // width: "8rem",
            }}
          >
            <Link to="/">
              <img
                src={ecommerceLogo}
                alt="ecommerce logo"
                style={{ height: "3.5rem", padding: 0 }}
              />
            </Link>
            {/* <SearchIcon /> */}
          </Box>
          {/* Input field for desktop */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <form onSubmit={handleSubmit(onSubmitDesk)}>
              <Box sx={{ display: "flex" }}>
                <TextField
                  sx={{
                    bgcolor: "white",
                  }}
                  label="Search product"
                  variant="outlined"
                  {...register("searchProductDesk")}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#c7f6ff",
                    ":hover": { bgcolor: "#9AE3F1" },
                    color: "#053262",
                  }}
                  type="submit"
                >
                  <SearchIcon sx={{ fontSize: "1.7rem" }} />
                </Button>
              </Box>
            </form>
          </Box>
          {/* Menu icon for mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              // size="large"
              // aria-label="account of current user"
              // aria-controls="menu-appbar"
              // aria-haspopup="true"
              sx={{ borderRadius: 0, padding: 0 }}
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              // anchorOrigin={{
              //   vertical: "bottom",
              //   horizontal: "left",
              // }}
              // keepMounted
              // transformOrigin={{
              //   vertical: "top",
              //   horizontal: "left",
              // }}
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
                      <Button sx={{ color: "#043363" }}>
                        <div className={isActive ? "active-contrast" : ""}>
                          {page}
                        </div>
                      </Button>
                    </MenuItem>
                  )}
                </NavLink>
              ))}
            </Menu>
          </Box>

          {/* Input field for mobile */}
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
              // justifyContent: "center",
              // width: "15rem",
              // flexGrow: 1,
              // px: "1.5rem",
            }}
          >
            <form onSubmit={handleSubmit(onSubmitMobile)}>
              <Box sx={{ display: "flex" }}>
                <InputBase
                  sx={{
                    bgcolor: "white",
                    // width: "80%",
                    // mr: 2,
                    height: "2.8rem",
                    paddingX: "0.5rem",
                    width: "8rem",
                  }}
                  placeholder="Search product"
                  // label="Search product"
                  // variant="outlined"
                  {...register("searchProductMobile")}
                />
                {/* <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    sx={{
                      bgcolor: "#48a1ca",
                    }}
                  >
                    <SearchIcon />
                  </Button> */}
                <IconButton
                  // variant="contained"
                  // size="small"
                  type="submit"
                  sx={{
                    bgcolor: "#c7f6ff",
                    ":hover": { bgcolor: "#9AE3F1" },
                    color: "#053262",
                    borderRadius: 0,
                    paddingX: "12px",
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </form>
          </Box>
          {/* pages for desktop */}
          <Box
            sx={{
              // flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: { xl: 8 },
              // justifyContent: "end",
              // pr: 4,
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
                  <Button sx={{ color: "white" }}>
                    <div className={isActive ? "active" : ""}>{page}</div>
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
          {/* Box for user settings */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "3px", md: 2, xl: 3 },
            }}
          >
            {isAuth ? (
              <Box>
                <Box /* title="Open settings" */>
                  <IconButton onClick={handleOpenUserMenu} sx={{ padding: 0 }}>
                    <Typography
                      sx={{
                        bgcolor: "transparent",
                        color: "#c7f6ff",
                        fontWeight: "bold",
                        py: "3px",
                        px: "11px",
                        border: "2px solid #c7f6ff",
                        borderRadius: "50px",
                      }}
                    >
                      {userData?.first_name || "No user"}
                    </Typography>
                  </IconButton>
                </Box>
                <Menu
                  sx={{ mt: "45px" }}
                  // id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  // keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {userData?.role === "ADMIN" && (
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#065299",
                        letterSpacing: "2px",
                        mb: "15px",
                        pl: "18px",
                      }}
                    >
                      ADMIN
                    </Typography>
                  )}
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate("/profile");
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  {userData?.role === "ADMIN" && (
                    <MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        navigate("/add-product");
                      }}
                    >
                      <Typography textAlign="center">Add a product</Typography>
                    </MenuItem>
                  )}
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      logoutFunction();
                      navigate("/login");
                      setCartItems({ items: [], totalSum: null });
                    }}
                    sx={{ gap: 1 }}
                  >
                    <LogoutIcon />
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
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
                  // keepMounted
                  // transformOrigin={{
                  //   vertical: "top",
                  //   horizontal: "left",
                  // }}
                  open={Boolean(anchorElAuth)}
                  onClose={handleCloseAuthMenu}
                >
                  {authOptions.map((option) => (
                    <NavLink
                      key={option}
                      to={option === "Log-in" ? `/login` : "/signup"}
                      style={{ textDecoration: "none" }}
                      onClick={handleCloseAuthMenu}
                    >
                      {({ isActive }) => (
                        <MenuItem>
                          <Button>
                            <div className={isActive ? "active-contrast" : ""}>
                              {option}
                            </div>
                          </Button>
                        </MenuItem>
                      )}
                    </NavLink>
                  ))}
                </Menu>
              </Box>
            )}
            <CartSideBar />
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header;
