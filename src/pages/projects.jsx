import React from "react";
import Navbar from "/src/app/components/NavBar.client";
import Post from "../app/components/post";
import { motion } from "framer-motion";
import { getAllPosts } from "../app/components/blogData";

export default function Projects() {
  const posts = getAllPosts();

  return (
    <div className="flex w-screen flex-col items-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white mt-28">
      <Navbar />
      <div className="sm:w-screen md:w-3/4 grid grid-cols-1 gap-8 pb-8">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Post snippet={true} {...post} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
