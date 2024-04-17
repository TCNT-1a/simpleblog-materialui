"use client";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpen from "@mui/icons-material/LockOpen";
import ExitToApp from "@mui/icons-material/ExitToApp";
import Person from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Toolbar
        style={{
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {isMobile ? <HorizontalMenu /> : <VerticalMenu />}
      </Toolbar>
    </AppBar>
  );
}

function HorizontalMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("menuItems", menuItems);
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.icon}
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
function VerticalMenu() {
  return (
    <>
      <div>
        {menuItems.map((item) => (
          <Button key={item.id} color="inherit">
            {item.icon}
            {item.title}
          </Button>
        ))}
      </div>
    </>
  );
}
const menuItems = [
  { title: "Profile", href: "/profile", icon: <Person />, id: 1 },
  { title: "My account", href: "/account", icon: <AccountCircle />, id: 2 },
  { title: "Login", href: "/login", icon: <LockOpen />, id: 3 },
  { title: "Logout", href: "/logout", icon: <ExitToApp />, id: 4 },
];
