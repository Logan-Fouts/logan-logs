/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="p-4 bg-green-500 bg-opacity-20 rounded-full group-hover:bg-opacity-30 group-hover:bg-green-500 transition-all duration-300">
      {icon}
    </div>
    <span className="mt-2 text-sm font-medium opacity-80 group-hover:opacity-100">{label}</span>
  </motion.a>
);

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-auto bg-black text-white">
      <GlowingStarsBackgroundCard className="z-0" />
      <Navbar isLanding={true} />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen lg:px-32 md:px-4 sm:px-4 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h1 className="font-black text-5xl sm:text-6xl mb-6">
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  <TypingEffect text="Welcome To My Portfolio" />
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-normal text-gray-300 text-lg sm:text-xl mx-auto mb-8 max-w-xl leading-relaxed"
              >
                Check out my projects, including my published thesis on the
                <span className="text-green-400 font-medium"> Multi-Method NDI Detection Framework</span>,
                which offers a novel approach to near-duplicate image detection.
                <span className="text-green-400 font-medium"> WildWood Gardens</span>, another highlight,
                is a website I built for a local bonsai business. I&apos;ve also developed a
                <span className="text-green-400 font-medium"> full-featured mobile app</span> for Them aswell
                using React Native. Additionally, I&apos;ve explored some product development,
                AI-driven tools, and Linux support for Windows hardware.
              </motion.p>
              <motion.a
                href="/CV.pdf"
                download="Logan_Fouts_CV.pdf"
                className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 text-lg font-medium shadow-lg shadow-green-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-3" />
                Download Resume
                <motion.span
                  className="absolute -right-1 -top-1 w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </motion.a>
            </motion.div>

            {/* Right Column - Image and Connect Section */}
            <div className="flex flex-col items-center pt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative w-4/5 md:w-1/2 mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-full blur-3xl" />
                <img
                  src="/jag2.png"
                  alt="Logan Logs Logo"
                  className="relative z-10 transform transition-transform duration-500 hover:scale-105 w-full h-auto max-w-md mx-auto"
                />
              </motion.div>

              {/* Connect With Me Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="w-full text-center"
              >
                <h2 className="font-bold text-2xl sm:text-3xl mb-6 text-green-400">
                  Connect With Me
                </h2>
                <div className="flex justify-center space-x-8 text-white">
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
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
          </motion.div>
        </div>
        <p className="text-gray-400 text-sm bottom-0 text-center p-4">Built with React and Deployed on Vercel • © {new Date().getFullYear()}</p>
      </main>
    </div>
  );
}