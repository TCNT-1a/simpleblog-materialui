"use client";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import NavBar from "./navbar";
import Brand from "./brand";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <header>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={isMobile ? 12 : 3}>
              <Brand></Brand>
            </Grid>
            <Grid item xs={isMobile ? 12 : 7}>
              {/* <NavBar></NavBar> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}
