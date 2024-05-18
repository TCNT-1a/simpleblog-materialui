import { StyledCard } from "@/components/StyleCard";
import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { DateRange } from "@mui/icons-material";
import { StyleLink } from "@/components/StyleLink";
import { Tags } from "./Tags";
import { Thumbnail } from "./Thumbnail";
import { Post } from "./post";
export function SnapPost({ post }: { post: Post }) {
  return (
    <Grid sx={{ margin: 5 }}>
      <StyledCard>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            alignItems: "center",
            padding: 20,
          }}
        >
          <TitlePost post={post} />
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>{Thumbnail(post)}</Card>
          </Grid>
          <Description post={post} />
        </Grid>
      </StyledCard>
      <SnapPostFooter post={post} />
    </Grid>
  );
}

function TitlePost({ post }: { post: Post }) {
  return (
    <Grid item>
      <StyleLink
        href={`/${post.category.slug}/${post.slug}`}
        passHref
        style={{ textDecoration: "none" }}
      >
        <Typography variant="h3">
          <span># </span>
          {post.title}
        </Typography>
      </StyleLink>
    </Grid>
  );
}
export function PostDate({ post }: { post: Post }) {
  return post.publicDate ? (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        textDecoration: "italic",
      }}
    >
      <DateRange />
      <small>
        <em>{post.publicDate}</em>
      </small>
    </Box>
  ) : null;
}

function Description({ post }: { post: Post }) {
  return (
    <Grid item xs={8} style={{}}>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.6,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 8,
          overflow: "hidden",
          width: 240,
        }}
      >
        {post.metaDescription}
      </p>
    </Grid>
  );
}
function SnapPostFooter({ post }: { post: Post }) {
  return (
    <Grid container spacing={2} sx={{ marginTop: "2px" }}>
      <Grid item>
        <Tags post={post} />
      </Grid>
      <Grid item>
        <PostDate post={post} />
      </Grid>
      {/* <Grid item>
        <ButtonDetail post={post} />
      </Grid> */}
    </Grid>
  );
}
function ButtonDetail({ post }: { post: Post }) {
  return (
    <Link
      href={`/${post.category.slug}/${post.slug}`}
      style={{ textDecoration: "none" }}
    >
      <Button variant="contained">Xem tiếp</Button>
    </Link>
  );
}
//
//Nồi cơm điện là thiết bị không thể thiếu trong mỗi gia đình. Hãy xem ngay bài viết này để biết cách sử dụng nồi cơm điện sao cho bền và tiết kiệm điện nhé!
