import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { Grid } from "@mui/material";
import LeftBar from "@/components/leftbar";
import { AppContext } from "./AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ta Chi Nguyen - Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            maxWidth: 1200,
            margin: "auto",
          }}
        >
          {/* <AppContext.Provider value={{isLoggedIn:true, setLoggedIn: }}>{children}</AppContext.Provider> */}
          {children}
        </div>
      </body>
    </html>
  );
}
