import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

export default function SimpleBackdrop() {
  const [openLoader, setOpenLoader] = useState(true);
  const handleCloseLoader = () => {
    setOpen(false);
  };
  const handleOpenLoader = () => {
    setOpen(true);
  };

  return (
    <Backdrop
      sx={{ color: "#c7f6ff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <CircularProgress color="inherit" />
        {/* <Typography>Fetching items. This can take around 50 seconds</Typography> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Fetching items.</Typography>
          <Typography>This can take 50 seconds or more.</Typography>
        </Box>
      </Box>
    </Backdrop>
  );
}
