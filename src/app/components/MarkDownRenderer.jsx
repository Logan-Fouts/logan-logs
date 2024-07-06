import React, { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

const MarkdownRenderer = ({ filePath }) => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching markdown:", error);
        setLoading(false);
      });
  }, [filePath]);

  useEffect(() => {
    marked.setOptions({
      highlight: function (code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: "hljs language-",
    });
  }, []);

  const renderMarkdown = () => {
    const rawMarkup = marked(markdown);
    const sanitizedMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: sanitizedMarkup };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <div
          className="prose dark:prose-invert max-w-none overflow-auto"
          dangerouslySetInnerHTML={renderMarkdown()}
        />
      </div>
    </div>
  );
};

export default MarkdownRenderer;
