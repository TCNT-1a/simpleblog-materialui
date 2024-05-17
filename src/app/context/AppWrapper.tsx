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
  setActiveMenu: (id: number) => {},
  activeMenu: 1,
  categories: [],
});

export function useAppContext() {
  return React.useContext(AppContext);
}
export const AppWrapper = ({
  categories,
  children,
}: {
  categories: any;
  children: ReactNode;
}) => {
  const router = useRouter();
  console.log(categories);
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
      },
    ] as menuItem[];

  const [menuItem, setMenuItem] = useState<menuItem[]>(loginState);
  const [activeMenu, setActiveMenu] = useState<number>(1);

  function navigate(url: string) {
    router.push(url);
  }
  useEffect(() => {}, [menuItem]);

  function setMenuLogin() {
    setMenuItem(loginState());
  }
  function setMenuLogout() {
    setMenuItem(logoutState());
  }
  // console.log(activeMenu);
  return (
    <AppContext.Provider
      value={{
        menuItem,
        setMenuLogin,
        setMenuLogout,
        activeMenu,
        setActiveMenu,
        categories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
