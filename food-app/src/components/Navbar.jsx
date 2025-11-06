import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import { Avatar, ButtonGroup } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import LoginButtonGroup from "./LoginButtonGroup";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, token, loading, error } = useSelector((state) => state.account);

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
              {user ? (
                <Avatar
                  sx={{ width: 50, height: 50, bgcolor: deepPurple[500] }}
                >
                  {user.username[0]}
                </Avatar>
              ) : (
                <LoginButtonGroup />
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Toolbar>
  );
}
