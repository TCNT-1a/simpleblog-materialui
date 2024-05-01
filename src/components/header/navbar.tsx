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
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import AirplanemodeActive from "@mui/icons-material/AirplanemodeActive";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import { AppContext } from "@/app/context/AppContext";
export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { menuItem } = useContext(AppContext);

  return (
    <AppBar position="static" style={{ boxShadow: "none" }}>
      <Toolbar
        style={{
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        {isMobile ? (
          <HorizontalMenu menuState={menuItem} />
        ) : (
          <VerticalMenu menuState={menuItem} />
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
