/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/NavBar.client";
import GlowingStarsBackgroundCard from "./components/glowing-stars.tsx";

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center group"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="p-3 bg-white bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
      {icon}
    </div>
    <span className="mt-2 text-sm">{label}</span>
  </motion.a>
);

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-auto bg-black text-white">
      <GlowingStarsBackgroundCard className="z-0" />
      <Navbar isLanding={true} />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="font-black text-5xl sm:text-6xl mb-6 bg-clip-text text-green-500">
                Welcome To Logan Logs
              </h1>
              <p className="font-normal text-white text-lg sm:text-xl mb-8 max-w-xl">
                Here I compile my software/tech knowledge and experiences.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="font-bold text-2xl sm:text-3xl mb-4 text-green-400">
                  Socials
                </h2>
                <div className="flex justify-center md:justify-start space-x-6 text-white">
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
              <motion.a
                href="/CV.pdf"
                download="Logan_Fouts_CV.pdf"
                className="relative inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2" />
                Resume
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [-5, 5] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="mb-8"
              >
                <img
                  src="/jag2.png"
                  alt="Logan Logs Logo"
                  className="mx-auto md:mx-0 p-0"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
