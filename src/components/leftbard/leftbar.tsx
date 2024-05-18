import { getApi2 } from "@/api-helper";
import { Chip, Grid, Box, Typography, makeStyles, styled } from "@mui/material";
import { StyleLink } from "../StyleLink";

export default function LeftBar() {
  return (
    <Grid container spacing={2}>
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
    <Block name="Tags">
      {tags.map((tag: any) => (
        <Grid item xs={12} key={tag.name}>
          <StyleLink href={`/tag/${tag.slug}`} passHref>
            <Chip label={`${tag.name} (${tag.count})`} />
          </StyleLink>
        </Grid>
      ))}
    </Block>
  );
}

async function Categories() {
  const { data } = await getApi2("api/blog/category");
  const categories = data.categories;

  return (
    <Block name="Category">
      {categories.map((category: any) => (
        <Grid item xs={12} key={category.slug}>
          <StyleLink href={`/${category.slug}`}>{category.name}</StyleLink>
        </Grid>
      ))}
    </Block>
  );
}

function Block({ name, children }: { name: string; children: any }) {
  return (
    <Grid
      container
      spacing={1}
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        color: "#000",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5">{name}</Typography>
      </Grid>
      {children}
    </Grid>
  );
}
