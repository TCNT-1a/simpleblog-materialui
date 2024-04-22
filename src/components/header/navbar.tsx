"use client";
import {
  AppBar,
  Box,
  Button,
  Grid,
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
import { useRouter } from "next/navigation";
import AirplanemodeActive from "@mui/icons-material/AirplanemodeActive";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setIsLoggedIn(true);
    router.push("/login");
    // setMenuState(loginState());
  };
  const handleSeries = () => {
    router.push("/series");
  };
  const handleHome = () => {
    router.push("/");
  };
  const guestState = () => [
    { id: 1, title: "Home", icon: <Person />, action: handleHome },
    { id: 2, title: "Series", icon: <AccountCircle />, action: handleSeries },
    { id: 3, title: "Airdrop", icon: <AirplanemodeActive /> },
  ];

  const loginState = () =>
    [
      ...guestState(),
      { id: 4, title: "Profile", icon: <AccountCircle /> },
      { id: 5, title: "Admin", icon: <AdminPanelSettings /> },
      { id: 6, title: "Logout", icon: <ExitToApp />, action: handleLogout },
      ,
    ] as menuItem[];

  const logoutState = () =>
    [
      ...guestState(),
      { id: 4, title: "Login", icon: <LockOpen />, action: handleLogin },
    ] as menuItem[];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMenuState(logoutState());
  };
  const [menuState, setMenuState] = React.useState(logoutState());

  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Toolbar
        style={{
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {isMobile ? (
          <HorizontalMenu menuState={menuState} />
        ) : (
          <VerticalMenu menuState={menuState} />
        )}
      </Toolbar>
    </AppBar>
  );
}

function HorizontalMenu({ menuState }: { menuState: menuItem[] }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setAnchorEl(null);
  };
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
        {menuState.map((item) => (
          <MenuItem
            key={item.id}
            onClick={(event) => {
              handleClose(event);
              if (item.action) item.action();
            }}
          >
            {item.icon}
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
function VerticalMenu({ menuState }: { menuState: menuItem[] }) {
  return (
    <>
      <Grid spacing={2} style={{ display: "flex" }}>
        {menuState.map((item) => (
          <Grid item key={item.id}>
            <Button key={item.id} color="inherit" onClick={item.action}>
              {item.icon}
              {item.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

type menuItem = {
  action: () => void;
  title: string;
  href: string;
  icon: React.ReactNode;
  id: number;
};
