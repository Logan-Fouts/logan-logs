"use client";
import React, { createContext } from "react";
import Navbar from "./components/NavBar.client";
import GlowingStarsBackgroundCard from "./components/glowing-stars.tsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      <GlowingStarsBackgroundCard className="z-1" />
      <Navbar />

      <main className="flex flex-col items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <h1 className="font-black text-4xl sm:text-6xl mr-4 bg-clip-text text-green-500 p-4">
              Welcome To Logan Logs
            </h1>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [-30, 30] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/logo.png"
                width={80}
                height={80}
                alt="Logan Logs Logo"
              />
            </motion.div>
          </div>

          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
            Here I compile my software/tech knowledge and experiences.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="font-bold text-2xl sm:text-3xl mb-6 text-green-400">
              Socials
            </h2>
            <div className="flex justify-center space-x-6">
              <SocialLink
                href="https://github.com/Logan-Fouts"
                icon={<FaGithub className="w-8 h-8" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/logan-fouts-aab33b230/"
                icon={<FaLinkedin className="w-8 h-8" />}
                label="LinkedIn"
              />
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center group"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="p-3 bg-white bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300 z-30">
      {icon}
    </div>
    <span className="mt-2 text-sm">{label}</span>
  </motion.a>
);
