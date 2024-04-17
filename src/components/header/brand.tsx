import { Grid, Typography } from "@mui/material";
import logo from "./logo.jpg";
import Image from "next/image";
export default function Brand() {
  return (
    <Grid container className="brand-logo">
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Image
            src={logo}
            alt="logo"
            width={70}
            height={70}
            style={{ borderRadius: "50%" }}
          />
        </div>
        <Typography style={{ flexGrow: 1 }} variant="h1" fontSize={40}>
          CodeSpace
        </Typography>
      </Grid>
    </Grid>
  );
}
