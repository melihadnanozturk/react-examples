import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h5"
              component={NavLink}
              to="/"
              sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
            >
              Food Api Redux Testing
            </Typography>
            <Button component={NavLink} to="/admin" color="inherit">
              Admin
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Toolbar>
  );
}
