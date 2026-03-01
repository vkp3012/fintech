import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StorageIcon from "@mui/icons-material/Storage";
import LoginIcon from "@mui/icons-material/Login";

export default function Header() {
  return (
    <AppBar sx={{ backgroundColor: "#272787" }}>
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FINTECH
        </Typography>

        {/* Menu Items */}
        
          <Tooltip title="Home">
            <Button color="inherit" startIcon={<HomeIcon />}>
              Home
            </Button>
          </Tooltip>

          <Tooltip title="About">
            <Button color="inherit" startIcon={<InfoIcon />}>
              About
            </Button>
          </Tooltip>

          <Tooltip title="Contact">
            <Button color="inherit" startIcon={<ContactMailIcon />}>
              Contact
            </Button>
          </Tooltip>

          <Tooltip title="Data">
            <Button color="inherit" startIcon={<StorageIcon />}>
              Data
            </Button>
          </Tooltip>

          {/* Login Icon Button */}
          <Tooltip title="Login">
            <IconButton color="inherit">
              <LoginIcon />
            </IconButton>
          </Tooltip>
        
      </Toolbar>
    </AppBar>
  );
}
