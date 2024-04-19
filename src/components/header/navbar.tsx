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
import { useRouter } from "next/navigation";

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const router = useRouter();
  const handleLogin = () => {
    setIsLoggedIn(true);
    setMenuState(loginState());
  };
  const handleSeries = () => {
    console.log("handleSerial");
    router.push("/series");
  };
  const loginState = () =>
    [
      { id: 1, title: "Home", icon: <Person /> },
      { id: 2, title: "Series", icon: <AccountCircle />, action: handleSeries },
      { id: 3, title: "Profile", icon: <AccountCircle /> },
      { id: 4, title: "Logout", icon: <ExitToApp />, action: handleLogout },
    ] as menuItem[];

  const logoutState = () =>
    [
      { id: 1, title: "Home", icon: <Person /> },
      { id: 2, title: "Series", icon: <AccountCircle />, action: handleSeries },
      { id: 3, title: "Login", icon: <LockOpen />, action: handleLogin },
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
          <HorizontalMenu
            menuState={menuState}
            onMenuStateChange={setMenuState}
          />
        ) : (
          <VerticalMenu
            menuState={menuState}
            onMenuStateChange={setMenuState}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}

function HorizontalMenu({
  menuState,
  onMenuStateChange,
}: {
  menuState: menuItem[];
  onMenuStateChange: React.Dispatch<React.SetStateAction<menuItem[]>>;
}) {
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
function VerticalMenu({
  menuState,
  onMenuStateChange,
}: {
  menuState: menuItem[];
  onMenuStateChange: React.Dispatch<React.SetStateAction<menuItem[]>>;
}) {
  return (
    <>
      <div>
        {menuState.map((item) => (
          <Button key={item.id} color="inherit" onClick={item.action}>
            {item.icon}
            {item.title}
          </Button>
        ))}
      </div>
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
