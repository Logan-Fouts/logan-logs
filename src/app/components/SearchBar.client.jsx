"use client";

import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("# Searching for " + searchQuery);
    // onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full space-x-2">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="px-4 py-2 w-full border border-gray-300 rounded-md text-black mr-4 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 py-2 h-1/2 rounded-md hover:bg-blue-600 md:hidden"
      >
        Go
      </button>
    </form>
  );
}
