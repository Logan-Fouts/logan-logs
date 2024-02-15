import fs from "fs";
import path from "path";
import { marked } from "marked";
import React from "react";

export async function getStaticPaths() {
  const markdownDir = path.join(process.cwd(), "public/markdown");
  const filenames = fs.readdirSync(markdownDir);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const markdownDir = path.join(process.cwd(), "public/markdown");
  const fullPath = path.join(markdownDir, `${params.slug}.md`);
  const markdown = fs.readFileSync(fullPath, "utf8");
  const htmlContent = marked(markdown);

  return {
    props: {
      htmlContent,
    },
  };
}

const DocumentationPage = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default DocumentationPage;
