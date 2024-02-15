import React, { useState, useEffect } from "react";
import MarkdownRenderer from "./../app/components/MarkDownRenderer";
import Navbar from "/src/app/components/NavBar.client";
import "./../app/globals.css";

export default function Documentation() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/markdown.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="flex flex-col w-screen min-h-screen justify-center items-center mb-12 p-2">
      <Navbar />
      <div className="bg-white mt-16 w-4/5 rounded-md p-2">
        <MarkdownRenderer
          markdown={markdown}
          className="flex flex-col items-center justify-center w-4/5 h-4/5 prose mx-auto p-2"
        />
      </div>
    </div>
  );
}
