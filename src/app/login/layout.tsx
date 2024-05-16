import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Box, Grid, styled } from "@mui/material";
import { Head } from "next/document";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ta Chi Nguyen - Blog",
  description: "Generated by create next app",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Box
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        {children}
      </Box>{" "}
    </>
  );
}
