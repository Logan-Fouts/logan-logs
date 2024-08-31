import React from 'react';
import { useRouter } from 'next/router';
import Post from '../app/components/post';

const postsData = {
  "future-of-react-2025": {
    title: "The Future of React: What's Coming in 2025",
    date: "August 31, 2024",
    tagLine: "Exploring upcoming features and improvements in React",
    imgSrc: "/thesis.png",
    imgDescription: "Illustration of React's potential new features",
    summary: "As we approach 2025, the React team has been hard at work on exciting new features. This post explores the most anticipated updates and how they might change the way we build applications.",
    content: "This is where the full content of your blog post would go. You can add multiple paragraphs, lists, code snippets, or any other content you'd like to include in a full blog post."
  }
};

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;

  const postData = postsData[slug];

  if (!postData) {
    return <div>Post not found</div>;
  }

  return <Post {...postData} snippet={false} />;
}