import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

export default function LoaderLogin() {
  return (
    <Backdrop
      sx={{ color: "#c7f6ff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "60%", md: "100%" },
          }}
        >
          <Typography>Logging in...</Typography>
          <Typography sx={{ textAlign: "center" }}>
            Please note: In case of inactivity, this process may take 50 seconds
            or more.
          </Typography>
        </Box>
      </Box>
    </Backdrop>
  );
}
