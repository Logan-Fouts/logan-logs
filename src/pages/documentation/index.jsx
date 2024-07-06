import React from "react";
import MarkdownRenderer from "/src/app/components/MarkDownRenderer";
import FileTree from "/src/app/components/FileTree";
import { promises as fs } from "fs";
import path from "path";
import { useFileSelection } from "/src/app/components/FileSelectionContext";
import NavBar from "/src/app/components/NavBar.client";

export async function getStaticProps() {
  const markdownDir = path.join("public", "markdown");
  const fileTree = await buildFileTree(markdownDir);

  async function buildFileTree(directoryPath) {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });
    const tree = await Promise.all(
      entries.map(async (entry) => {
        const entryPath = path.join(directoryPath, entry.name);
        if (entry.isDirectory()) {
          return {
            name: entry.name,
            type: "directory",
            children: await buildFileTree(entryPath),
          };
        } else {
          return {
            name: entry.name,
            type: "file",
            path: entryPath.substring(7),
          };
        }
      }),
    );
    return tree;
  }

  return {
    props: {
      fileTree: fileTree,
    },
  };
}

export default function Documentation({ fileTree }) {
  const { selectedFile } = useFileSelection();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black pt-8">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              File Structure
            </h2>
            <div className="max-h-[70vh] overflow-y-auto">
              <FileTree fileTree={fileTree} />
            </div>
          </aside>
          <main className="w-full md:w-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-md md:p-6 sm:p-0">
            {!selectedFile ? (
              <MarkdownRenderer filePath="markdown/Etc/Readme.md" />
            ) : (
              <MarkdownRenderer filePath={selectedFile} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
