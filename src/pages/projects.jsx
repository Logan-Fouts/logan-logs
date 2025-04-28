import React from "react";
import { useState } from "react";
import Navbar from "/src/app/components/NavBar.client";
import Post from "../app/components/post";
import { motion } from "framer-motion";
import { getAllPosts } from "../app/components/blogData";

function PageSwitcher({ pages, currentPage, onPageChange }) {
  return (
    <div className="w-1/2 md:w-1/4 bg-gray-900 text-center pb-10">
      {Array.from({ length: pages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          className={`px-4 rounded font-bold ${
            pageNum === currentPage
              ? "text-blue-600"
              : "text-blue-900 hover:text-blue-600"
          }`}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
}

export default function Projects() {
  const allPosts = getAllPosts();
  const numPostsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const numPages = Math.ceil(allPosts.length / numPostsPerPage);

  const currentPosts = allPosts.slice(
    (currentPage - 1) * numPostsPerPage,
    currentPage * numPostsPerPage,
  );

  const handlePageSwitch = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="flex w-screen flex-col items-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white mt-28">
      <Navbar />
      <div className="sm:w-screen md:w-3/4 grid grid-cols-1 gap-8 pb-8">
        {currentPosts.map((post) => (
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
      <PageSwitcher
        pages={numPages}
        currentPage={currentPage}
        onPageChange={handlePageSwitch}
      />
    </div>
  );
}
