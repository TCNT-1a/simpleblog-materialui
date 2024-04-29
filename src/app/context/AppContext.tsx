"use client";
import React, { ReactNode } from "react";
import AirplanemodeActive from "@mui/icons-material/AirplanemodeActive";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpen from "@mui/icons-material/LockOpen";
import ExitToApp from "@mui/icons-material/ExitToApp";
import Person from "@mui/icons-material/Person";
import { menuItem } from "./menu";
import { useRouter } from "next/navigation";

export const AppContext = React.createContext({
  menuItem: [] as menuItem[],
  setMenuItem: (value: menuItem[]) => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
    setMenuItem(loginState());
  };
  const handleLogout = () => {
    setMenuItem(logoutState());
  };
  const handleSeries = () => {
    router.push("/series");
  };
  const handleAirdrop = () => {
    router.push("/airdrop");
  };
  const handleHome = () => {
    router.push("/");
  };

  const guestState = () => [
    { id: 1, title: "Home", icon: <Person />, action: handleHome },
    { id: 2, title: "Series", icon: <AccountCircle />, action: handleSeries },
    {
      id: 3,
      title: "Airdrop",
      icon: <AirplanemodeActive />,
      action: handleAirdrop,
    },
  ];

  const loginState = () =>
    [
      ...guestState(),
      { id: 4, title: "Profile", icon: <AccountCircle /> },
      { id: 5, title: "Admin", icon: <AdminPanelSettings /> },
      {
        id: 6,
        title: "Logout",
        icon: <ExitToApp />,
        action: handleLogout,
      },
      ,
    ] as menuItem[];

  const logoutState = () =>
    [
      ...guestState(),
      { id: 4, title: "Login", icon: <LockOpen />, action: handleLogin },
    ] as menuItem[];

  const [menuItem, setMenuItem] = React.useState<menuItem[]>(loginState);

  return (
    <AppContext.Provider value={{ menuItem, setMenuItem }}>
      {children}
    </AppContext.Provider>
  );
};
