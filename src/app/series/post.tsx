"use client";
import {
  Badge,
  Button,
  Card,
  Chip,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import { get } from "http";
import { lorem } from "./lorem";
import { useEffect, useState } from "react";
export default function Post() {
  const theme = useTheme();
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) =>
      createPost(id)
    ) as Post[];
    setPosts(p);
  }, []);
  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            padding: 20,
            margin: 10,
            // background: theme.palette.divider,
          }}
        >
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item>
              <ViewCount viewCount={post.viewCount}></ViewCount>
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <Typography variant="body1">{post.publicDate}</Typography>
            </Grid>
          </Grid>
          <h2 style={{ color: theme.palette.info.light }}>#{post.title}</h2>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Image
                alt="post image"
                width={300}
                height={200}
                src={`https://picsum.photos/300/200?random=${post.id}`}
                style={{ width: "100%" }}
              ></Image>
            </Grid>
            <Grid item xs={8} style={{}}>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 8,
                  overflow: "hidden",
                }}
              >
                {post.content}
              </p>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="contained">Xem tiếp</Button>
            </Grid>
            <Grid item>
              <ViewCategory tags={post.tags} />
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
}

function ViewCount({ viewCount }: { viewCount: number }) {
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Grid item>
        <VisibilityIcon />
      </Grid>
      <Grid item>
        <Typography variant="body1">{viewCount}</Typography>
      </Grid>
    </Grid>
  );
}
function ViewCategory({ tags }: { tags: string }) {
  return (
    <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {tags.split(",").map((tag) => (
        <Grid item key={tag}>
          <Chip label={tag} />
        </Grid>
      ))}
    </Grid>
  );
}
type Post = {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  tags: string;
  publicDate: string;
};

function createPost(id: number) {
  return {
    id: id,
    title: getLorem(10),
    content: getLorem(100),
    viewCount: 100,
    tags: "category1, category2, category3",
    publicDate: formatDate(new Date()),
  };
}
function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

// function lorem() {
//   const lorem =
//     "Lorem ipsum purus semper eget duis at tellus at urna condimentum. Amet justo donec enim diam vulputate ut pharetra sit. Pretium lectus quam id leo in vitae turpis massa sed. Feugiat nibh sed pulvinar proin gravida. Eget velit aliquet sagittis id. Nisl pretium fusce id velit. Imperdiet proin fermentum leo vel orci porta non pulvinar. Proin gravida hendrerit lectus a. Nibh tortor id aliquet lectus. Maecenas ultricies mi eget mauris pharetra et ultrices neque ornare. Amet est placerat in egestas erat imperdiet. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Eu tincidunt tortor aliquam nulla facilisi cras. Tellus at urna condimentum mattis pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Eu sem integer vitae justo. Tempor orci eu lobortis elementum nibh tellus molestie nunc non.\nVel turpis nunc eget lorem dolor sed viverra ipsum nunc. Lacinia at quis risus sed. Velit egestas dui id ornare arcu odio ut sem nulla. Lacus vestibulum sed arcu non odio euismod lacinia. Imperdiet nulla malesuada pellentesque elit. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam sem fringilla ut morbi tincidunt. Adipiscing bibendum est ultricies integer quis auctor elit.\n";
//   return lorem;
// }

function getLorem(num = 10) {
  const randomWords = [];
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * (lorem.length - 1));
    randomWords.push(lorem[randomIndex]);
  }
  const loremSentence = randomWords.join(" ");
  return loremSentence;
}
