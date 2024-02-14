"use client";

import React, { useState } from "react";
import "./../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SearchBar from "./SearchBar.client.jsx";

export default function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState("text-black");

  function handleHamburgerClick() {
    setIsNavVisible(!isNavVisible);
    setButtonColor(buttonColor === "text-black" ? "text-white" : "text-black");
  }

  const navClasses = `${isNavVisible ? "flex" : "hidden"} bg-black text-white flex-col w-2/3 h-3/5 p-4 pt-16 m-0 sm:h-16 sm:w-screen sm:flex-row sm:p-0 sm:items-center sm:flex`;

  return (
    <div className="w-screen h-screen m-0 p-0 flex justify-start absolute left-0 top-0">
      <div
        className="sm:hidden text-3xl m-4 absolute"
        onClick={handleHamburgerClick}
      >
        <i className={`fas fa-bars ${buttonColor} cursor-pointer`}></i>
      </div>
      <nav className={navClasses}>
        <img src="./../favicon.ico" className="w-16 mb-5 sm:m-0 sm:mr-4" />
        <a href="/documentation" className="text-xl mb-5 sm:m-0 sm:mr-4">
          Documentationˇ
        </a>
        <a href="/projects" className="text-xl mb-5 sm:m-0 sm:mr-4">
          Projectsˇ
        </a>
        <a href="/blog" className="text-xl mb-20 sm:m-0 sm:mr-8">
          Blogˇ
        </a>
        <div className="ml-auto mr-4">
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}
