"use client";
import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    h1: {
      fontSize: "2.3rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2.0rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.7rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#AFD198",
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
      light: "#DBA979",
      main: "#E8EFCF",
      dark: "#211551",
      contrastText: "#AFD198",
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
