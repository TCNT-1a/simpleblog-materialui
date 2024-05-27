import { BRANCH_NAME } from "./app.config";

// export async function generateMetadata_Object(title: string, notFound = false) {
//   if (notFound == true) return { title: "404 Not Found" };
//   return {
//     title: BRANCH_NAME + " - " + title,
//     // description: BRANCH_NAME + " - ",
//     // metadata,
//   };
// }
export type HeadingTag = {
  noindex?: string;
  prev?: string;
  next?: string;
  canonical?: string;
  meta_description?: string;
  key?: string;
  title?: string;
};

export function generateHeadingTag(metadata: HeadingTag) {
  return {
    title: BRANCH_NAME + " - " + metadata.title,
  };
}
