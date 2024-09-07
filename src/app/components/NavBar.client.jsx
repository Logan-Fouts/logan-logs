"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      if (window.innerWidth >= 640) {
        setIsNavVisible(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleHamburgerClick() {
    setIsNavVisible(!isNavVisible);
  }

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black bg-opacity-90 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-row items-center space-x-10">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={35}
                height={50}
                className="h-12"
              />
            </Link>
            {props.isLanding == undefined ? (
              <h2 className="text-2xl sm:text-5xl font-bold">
                Logan Fouts <hr></hr>
              </h2>
            ) : null}
          </div>

          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={handleHamburgerClick}
          >
            <i
              className={`fas fa-${isNavVisible ? "times" : "bars"} text-2xl`}
            ></i>
          </button>

          <AnimatePresence>
            {(isNavVisible || !isMobile) && (
              <motion.nav
                className="absolute sm:relative top-full left-0 w-full sm:w-auto bg-black sm:bg-transparent"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={navVariants}
                transition={{ duration: 0.3 }}
              >
                <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 py-4 sm:py-0">
                  <NavItem href="/AboutMe">About Me</NavItem>
                  <NavItem href="/projects">Projects</NavItem>
                  <NavItem href="/documentation">Documentation</NavItem>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

const NavItem = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-white hover:text-gray-300 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);
