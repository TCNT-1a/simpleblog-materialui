"use client";
import defaultTheme from "@/styles/default";
import styled from "@emotion/styled";
import Link from "next/link";

const theme = defaultTheme;
export const StyleLink = styled(Link)({
  textDecoration: "none",
  "&:hover": {
    color: "#3f51b5",
    textDecoration: "underline",
  },
});
