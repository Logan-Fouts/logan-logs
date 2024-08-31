import React from "react";
import Navbar from "/src/app/components/NavBar.client";
import { motion } from "framer-motion";


export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-gray-900 text-white mt-10">
      <Navbar />
      <h1
          className="p-2 text-6xl text-center font-black bg-clip-text text-green-500 mb-10 mt-12"
        >
          Project Blog
        </h1>
      <div className="w-3/4 bg-red-500 flex flex-col items-center justify-center">
        Hello
      </div>
    </div>
  );
}