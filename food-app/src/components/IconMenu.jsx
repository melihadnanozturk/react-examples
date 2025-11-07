import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Örnek olarak dikey üç nokta ikonu
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../pages/slices/AccountSlice";

function IconMenu({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileAction = () => {
    console.log("Profil seçeneğine tıklandı!");
    handleClose(); // İşlem yapıldıktan sonra menüyü kapat.
  };

  const handleLogoutAction = () => {
    localStorage.clear();
    dispatch(logout());
    navigate("/auth/login");
    handleClose(); // İşlem yapıldıktan sonra menüyü kapat.
  };

  return (
    <div>
      <IconButton
        aria-label="daha fazla"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar sx={{ width: 50, height: 50, bgcolor: deepPurple[500] }}>
          {user?.username?.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogoutAction}>Çıkış Yap</MenuItem>
      </Menu>
    </div>
  );
}

export default IconMenu;
