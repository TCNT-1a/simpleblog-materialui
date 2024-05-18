import { getApi2 } from "@/api-helper";
import { Chip, Grid, Box, Typography, makeStyles } from "@mui/material";
import Link from "next/link";

//   link: {
//     fontSize: 14,
//     textDecoration: "none",
//     color: "#000",
//     "&:hover": {
//       color: "#3f51b5", // Change color when hover
//     },
//   },
// }

const styles = {
  link: {
    fontSize: 14,
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      color: "#3f51b5", // Change color when hover
    },
  },
};

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
          <Chip label={`${tag.name} (${tag.count})`} />
        </Grid>
      ))}
    </Block>
  );
}

async function Categories() {
  const { data } = await getApi2("api/blog/category");
  const categories = data.categories;
  // const classes = useStyles();

  return (
    <Block name="Category">
      {categories.map((category: any) => (
        <Grid item xs={12} key={category.slug}>
          <Link href={`/${category.slug}`}>{category.name}</Link>
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
