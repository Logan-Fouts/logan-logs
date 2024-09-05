import React from "react";
import { useRouter } from "next/router";
import Post from "../app/components/post";
import { getPostBySlug } from "../app/components/blogData";

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const postData = getPostBySlug(slug);

  if (!postData) {
    return <div>Post not found</div>;
  }

  return <Post {...postData} snippet={false} />;
}
