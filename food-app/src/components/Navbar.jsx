import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import IconButton from "@mui/material/IconButton";

export default function Navbar() {
  return (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" alignItems="center" sx={{ pr: 5 }}>
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                gap: 3,
              }}
            >
              <IconButton component={NavLink} color="inherit" to="/">
                <SoupKitchenIcon fontSize="large" />
              </IconButton>
              <Typography
                variant="h4"
                component={NavLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Maoco Food
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              <Typography
                variant="h5"
                component={NavLink}
                to="/admin"
                color="inherit"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Panel
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Toolbar>
  );
}
