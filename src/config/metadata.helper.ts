import { BRANCH_NAME } from "./app.config";

export async function generateMetadata_Object(title: string, notFound = false) {
  if (notFound == true) return { title: "404 Not Found" };
  return {
    title: BRANCH_NAME + " - " + title,
    // description: BRANCH_NAME + " - ",
    // metadata,
  };
}
