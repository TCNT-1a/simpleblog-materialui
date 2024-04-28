"use client";
import React from "react";

import { menuItem } from "./menu";

export const AppContext = React.createContext({
  // isLoggedIn: false,
  // setLoggedIn: (value: boolean) => {},
  menuItem: [] as menuItem[],
  // setMenu: (value: menuItem[]) => {},
});
