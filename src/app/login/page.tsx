"use client";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  function handleLogin() {
    router.push("/");
  }
  return (
    <Grid container spacing={1} display={"flex"} textAlign={"center"}>
      <Grid item xs={12}>
        <h1>Login</h1>
      </Grid>
      <Grid item xs={12}>
        <TextField placeholder="Username" type="text" />
      </Grid>
      <Grid item xs={12}>
        <TextField placeholder="Password" type="password" />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={handleLogin}>Login</Button>
      </Grid>
    </Grid>
  );
}
