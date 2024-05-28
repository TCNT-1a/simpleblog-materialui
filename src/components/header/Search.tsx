"use client";
import { getApi } from "@/config/api-helper";
import { ListGroup, TextInput } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export function SearchBox({}) {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  return (
    <>
      <div className="relative">
        <TextInput
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              const pos = (
                await getApi().get(`api/blog/search?title=${search}`)
              ).data.data;
              setPosts(pos);
              setSearch("");
            }
          }}
        />
        <div className="absolute">
          <ListGroup className="w-48">
            {posts.map((post: any, i) => (
              <Link key={i} href={`/${post.category.slug}/${post.slug}`}>
                <ListGroup.Item className="bg-opacity-70">
                  {post.title}
                </ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </div>
      </div>
    </>
  );
}
