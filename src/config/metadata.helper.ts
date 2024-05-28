import { Metadata } from "next";
import { BRANCH_NAME } from "./app.config";
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";

export type HeadingTag = {
  noindex?: string;
  canonical?: string;
  meta_description?: string;
  key?: string;
  title?: string;
};

export function generateHeadingTag(
  metadata: HeadingTag,
  nextPath: string,
  previousPath: string
): Metadata {
  let other: IconDescriptor[] = [];
  if (previousPath) {
    other.push({
      rel: "prev",
      url: previousPath,
    } as IconDescriptor);
  }

  if (nextPath) {
    other.push({
      rel: "next",
      url: nextPath,
    } as IconDescriptor);
  }

  return {
    title: BRANCH_NAME + " - " + metadata.title,
    robots: metadata.noindex ? "noindex" : "",
    description: metadata.meta_description,

    icons: {
      icon: "/favicon.ico",
      other: other,
    },
    alternates: {
      canonical: metadata.canonical,
    },
  };
}
