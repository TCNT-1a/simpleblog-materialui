import { Grid } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Typography } from "@mui/material";
export function ViewCount({ viewCount }: { viewCount: number }) {
  return (
    <Grid
      container
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid item>
        <VisibilityIcon />
      </Grid>
      <Grid item>
        <Typography variant="body1">{viewCount}</Typography>
      </Grid>
    </Grid>
  );
}
