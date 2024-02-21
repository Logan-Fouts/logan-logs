"use client";

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import SearchBar from "./SearchBar.client.jsx";
import Image from "next/image.js";

export default function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  function handleHamburgerClick() {
    setIsNavVisible(!isNavVisible);
  }

  const navClasses = `${isNavVisible ? "flex" : "hidden"} bg-black text-white flex-col w-2/3 h-3/5 p-4 pt-16 m-0 sm:h-16 sm:w-screen sm:flex-row sm:p-0 sm:items-center sm:flex`;

  return (
    <div
      id="container"
      className="w-screen m-0 p-0 flex justify-start absolute left-0 top-0"
    >
      <div
        className="sm:hidden text-3xl m-4 absolute"
        onClick={handleHamburgerClick}
      >
        <i className={`fas fa-bars tex-white cursor-pointer`}></i>
      </div>
      <nav className={navClasses}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="small logo"
            width={20}
            height={40}
            className="w-8 mb-5 sm:m-0 sm:mr-6 sm:ml-4"
          />
        </Link>
        <Link href="/documentation" className="text-xl mb-5 sm:m-0 sm:mr-6">
          Documentationˇ
        </Link>
        <Link href="/projects" className="text-xl mb-5 sm:m-0 sm:mr-6">
          Projectsˇ
        </Link> 
        <div className="ml-auto mr-4">
        </div>
      </nav>
    </div>
  );
}

// <Link href="/blog" className="text-xl mb-20 sm:m-0 sm:mr-8">
//           Blogˇ
//         </Link>
//         <SearchBar />
