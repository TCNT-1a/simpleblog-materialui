"use client";
import React from "react";
import { Grid, Box, ThemeProvider } from "@mui/material";
import Header from "@/components/header/header";
import LeftBar from "@/components/leftbard/leftbar";
import theme from "@/styles/default";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Grid container>
        <Grid item xs={3}>
          <LeftBar />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
