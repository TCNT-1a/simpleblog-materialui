import React from "react";
import { Grid, Box } from "@mui/material";
import Header from "@/components/header/header";
import LeftBar from "@/components/leftbar";
import { AppProvider } from "./context/AppContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <Box>
        <Header></Header>
        <Grid container>
          <Grid item xs={3}>
            <LeftBar />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Box>
    </AppProvider>
  );
}
