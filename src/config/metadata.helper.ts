import { Metadata } from "next";
import { BRANCH_NAME } from "./app.config";

export type HeadingTag = {
  noindex?: string;
  prev?: string;
  next?: string;
  canonical?: string;
  meta_description?: string;
  key?: string;
  title?: string;
};

export function generateHeadingTag(metadata: HeadingTag): Metadata {
  console.log("metadata", metadata);
  const appLinks = [
    {
      rel: "canonical",
      href: metadata.canonical,
    },
  ];
  return {
    title: BRANCH_NAME + " - " + metadata.title,
    robots: metadata.noindex ? "noindex" : "",
    description: metadata.meta_description,
    alternates: {
      canonical: metadata.canonical,
    },
  };
}
