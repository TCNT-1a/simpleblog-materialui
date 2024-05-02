"use client";
import React, { ReactNode, use, useEffect, useState } from "react";
import AirplanemodeActive from "@mui/icons-material/AirplanemodeActive";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOpen from "@mui/icons-material/LockOpen";
import ExitToApp from "@mui/icons-material/ExitToApp";
import Person from "@mui/icons-material/Person";
import { menuItem } from "./menu";
import { useRouter } from "next/navigation";
import { act } from "react-dom/test-utils";

const AppContext = React.createContext({
  menuItem: [] as menuItem[],
  setMenuLogout: () => {},
  setMenuLogin: () => {},
});

export function useAppContext() {
  return React.useContext(AppContext);
}
export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    setMenuItem(logoutState());
  };
  const handleSeries = () => {
    navigate("/huong-dan-co-ban");
  };
  const handleAirdrop = () => {
    navigate("/airdrop");
  };
  const handleHome = () => {
    navigate("/");
  };

  const guestState = () => [
    {
      id: 1,
      action: handleHome,
      title: "Home",
      href: "/",
      icon: <Person />,
      active: false,
    },
    {
      action: handleSeries,
      title: "Hướng dẫn cơ bản",
      href: "/huong-dan-co-ban",
      icon: <AccountCircle />,
      id: 2,
      active: false,
    },
    {
      action: handleAirdrop,
      title: "Airdrop",
      href: "/airdrop",
      icon: <AirplanemodeActive />,
      id: 3,
      active: false,
    },
  ];

  const loginState = () =>
    [
      ...guestState(),
      // { id: 4, title: "Profile", icon: <AccountCircle /> },
      // { id: 5, title: "Admin", icon: <AdminPanelSettings /> },
      {
        id: 6,
        title: "Logout",
        icon: <ExitToApp />,
        action: handleLogout,
        active: false,
      },
      ,
    ] as menuItem[];

  const logoutState = () =>
    [
      ...guestState(),
      {
        id: 4,
        title: "Login",
        icon: <LockOpen />,
        action: handleLogin,
        active: false,
      },
    ] as menuItem[];

  const [menuItem, setMenuItem] = useState<menuItem[]>(loginState);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMenuClick = (id: number) => {
    setActiveMenu(id);
  };
  function navigate(url: string) {
    // setMenuItem(menuItem.map((item) => ({ ...item, active: false })));
    router.push(url);
  }
  useEffect(() => {
    // console.log(menuItem);
  }, [menuItem]);

  function setMenuLogin() {
    setMenuItem(loginState());
  }
  function setMenuLogout() {
    setMenuItem(logoutState());
  }

  return (
    <AppContext.Provider value={{ menuItem, setMenuLogin, setMenuLogout }}>
      {children}
    </AppContext.Provider>
  );
};
