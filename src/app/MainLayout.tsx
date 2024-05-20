"use client";
import React from "react";
import {
  Grid,
  Box,
  ThemeProvider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "@/components/header/header";
import LeftBar from "@/components/leftbar/leftbar";
import defaultTheme from "../styles/default";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log("isMobile", isMobile);
  return (
    <div className="container">
      <Header></Header>
      <div className="grid">
        <LeftBar />
      </div>
      <div>{children}</div>
      {/* <Grid container>
        <Grid item xs={isMobile ? 12 : 3}>
          
        </Grid>
        <Grid item xs={isMobile ? 12 : 9}>
          {children}
        </Grid>
      </Grid> */}
    </div>
    // <ThemeProvider theme={defaultTheme}>
    //   <Header></Header>
    //   <div className="grid grid"></div>
    //   <Grid container>
    //     <Grid item xs={isMobile ? 12 : 3}>
    //       <LeftBar />
    //     </Grid>
    //     <Grid item xs={isMobile ? 12 : 9}>
    //       {children}
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>
  );
}
