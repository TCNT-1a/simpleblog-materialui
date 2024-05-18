"use client";
import styled from "@emotion/styled";
import Link from "next/link";

export const StyleLink = styled(Link)({
  color: "#000",
  textDecoration: "none",
  "&:hover": {
    color: "#3f51b5",
    // color: "red",
    textDecoration: "underline",
  },
});
