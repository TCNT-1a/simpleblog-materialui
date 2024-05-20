"use client";
import { createTheme } from "@mui/material/styles";
const colors = { c1: "#DBA979", c2: "#E8EFCF", c3: "#211551", c4: "#AFD198" };

const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: "2.3rem",
      fontWeight: "bold",
      color: colors.c4,
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "2.0rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.7rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: colors.c4,
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.3rem",
    },
    h6: {
      fontSize: "1.1rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1.1rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  palette: {
    // primary: {
    //   light: "#DBA979",
    //   main: "#E8EFCF",
    //   dark: "#ECCA9C",
    //   contrastText: "#AFD198",
    // },
    primary: {
      light: colors.c1,
      main: colors.c2,
      dark: colors.c3,
      contrastText: colors.c4,
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default defaultTheme;
