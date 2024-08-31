import React from "react";
import Navbar from "/src/app/components/NavBar.client";
import Post from "../app/components/post";
import { motion } from "framer-motion";

export default function Projects() {
  const posts = [
    {
      slug: "future-of-react-2025",
      title: "The Future of React: What's Coming in 2025",
      date: "August 31, 2024",
      tagLine: "Exploring upcoming features and improvements in React",
      imgSrc: "/thesis.png",
      imgDescription: "Illustration of React's potential new features",
      summary: "As we approach 2025, the React team has been hard at work on exciting new features. This post explores the most anticipated updates and how they might change the way we build applications.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white mt-10">
      <Navbar />
      <motion.h1 
        className="p-2 text-6xl text-center font-black bg-clip-text text-green-500 mb-10 mt-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Blog
      </motion.h1>
      <div className="w-3/4 flex flex-col items-center justify-center space-y-12">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Post
              snippet={true}
              {...post}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
