import { getApi2 } from "@/api-helper";
import { Chip, Grid, Box } from "@mui/material";
import Link from "next/link";

export default function LeftBar() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Tags
      </Grid>
      <Grid item xs={12}>
        <Tags />
      </Grid>
      <Grid item xs={12}>
        <Categories />
      </Grid>
    </Grid>
  );
}

async function Tags() {
  const { data } = await getApi2("api/blog/tags");
  const tags = data.tags;
  return (
    <Grid
      container
      spacing={1}
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {tags.map((tag: any) => (
        <Grid item key={tag.name}>
          <Chip label={`${tag.name} (${tag.count})`} />
        </Grid>
      ))}
    </Grid>
  );
}

async function Categories() {
  const { data } = await getApi2("api/blog/category");
  const categories = data.categories;

  return (
    <Grid container spacing={1}>
      <Box>Category</Box>
      {categories.map((category: any) => (
        <Grid item xs={12}>
          <Link href={`/${category.slug}`}>{category.name}</Link>
        </Grid>
      ))}
    </Grid>
  );
}
