import { Grid, Typography } from "@mui/material";
import logo from "./logo.jpg";
import Image from "next/image";
export default function Brand() {
  return (
    <Grid
      container
      className="brand-logo"
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>
        <div>
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </Grid>
      <Grid item>
        <Typography
          style={{ flexGrow: 1 }}
          variant="h1"
          fontWeight={700}
          fontSize={26}
        >
          TCNCrypto
        </Typography>
      </Grid>
    </Grid>
  );
}
