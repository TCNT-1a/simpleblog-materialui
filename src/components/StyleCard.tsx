"use client";
import defaultTheme from "@/styles/default";
import { Card } from "@mui/material";
export function StyledCard({ children }: { children: React.ReactNode }) {
  const theme = defaultTheme;
  return (
    <Card sx={{ background: theme.palette.primary.main }}>{children}</Card>
  );
}
