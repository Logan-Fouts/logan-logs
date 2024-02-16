import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownRenderer = ({ filePath }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, [filePath]);

  const renderMarkdown = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div
      className="bg-white text-black p-16 prose max-w-full"
      dangerouslySetInnerHTML={renderMarkdown()}
    ></div>
  );
};

export default MarkdownRenderer;
