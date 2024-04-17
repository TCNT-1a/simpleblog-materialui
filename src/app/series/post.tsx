import { title } from "process";

export default function Post() {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>#{post.title}</h2>
          <p>{post.content}</p>
          <div>{post.publicDate}</div>
        </div>
      ))}
    </>
  );
}
const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
    publicDate: new Date().toString(),
  },
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
    publicDate: new Date().toString(),
  },
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
    publicDate: new Date().toString(),
  },
];
