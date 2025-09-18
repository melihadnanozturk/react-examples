import { AppBar, Toolbar, Box, IconButton, Button, Badge } from "@mui/material";
import MuseumIcon from "@mui/icons-material/Museum";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const links = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" },
];

const auth = [
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
];

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <IconButton color="inherit">
            <MuseumIcon />
          </IconButton>
          {links.map((link) => (
            <Button
              component={NavLink}
              to={link.path}
              color="inherit"
              key={link.title}
            >
              {link.title}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit" component={NavLink} to="/cart">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {auth.map((link) => (
            <Button
              component={NavLink}
              to={link.path}
              color="inherit"
              key={link.title}
            >
              {link.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
