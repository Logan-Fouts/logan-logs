import React from "react";
import { marked } from "marked";

const MarkdownRenderer = ({ markdown, className = "" }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown);

    return { __html: rawMarkup };
  };

  const markdownHTML = getMarkdownText();

  return <div dangerouslySetInnerHTML={markdownHTML} className={className} />;
};

export default MarkdownRenderer;
