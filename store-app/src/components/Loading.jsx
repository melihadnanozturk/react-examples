import { Backdrop, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading({ text = "Loading..." }) {
  return (
    <Backdrop open={true} invisible={false}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={70} color="primary" />
        <Typography variant="h3">{text}</Typography>
      </Box>
    </Backdrop>
  );
}
