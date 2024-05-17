import { Grid } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Typography } from "@mui/material";
export function NumberOfView({ viewNumber }: { viewNumber: number }) {
  return (
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
      spacing={1}
    >
      <Grid item>
        <VisibilityIcon />
      </Grid>
      <Grid item>
        <Typography variant="body1">{viewNumber}</Typography>
      </Grid>
    </Grid>
  );
}
