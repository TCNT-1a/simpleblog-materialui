import { Chip, Grid } from "@mui/material";

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
        <MarketCoin />
      </Grid>
    </Grid>
  );
}
const tags = [
  { name: "React", count: 10 },
  { name: "Next", count: 5 },
  { name: "Node", count: 3 },
  { name: "TypeScript", count: 2 },
  { name: "JavaScript", count: 1 },
];

function Tags() {
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
      {tags.map((tag) => (
        <Grid item key={tag.name}>
          <Chip label={`${tag.name} (${tag.count})`} />
        </Grid>
      ))}
    </Grid>
  );
}

function MarketCoin() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Market Coin
      </Grid>
      <Grid item xs={12}>
        <Coin />
        <Coin />
      </Grid>
    </Grid>
  );
}
function Coin() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Chip label="Bitcoin" />
      </Grid>
      <Grid item xs={12}>
        <Chip label="Ethereum" />
      </Grid>
    </Grid>
  );
}