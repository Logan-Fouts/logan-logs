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
            // Ugly way to fix file path
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
    <div className="app">
      <NavBar />
      <div className="flex flex-row w-screen pt-16">
        <FileTree fileTree={fileTree} />
        {!selectedFile && (
          <MarkdownRenderer filePath="markdown/Etc/Readme.md" />
        )}
        {selectedFile && <MarkdownRenderer filePath={selectedFile} />}
      </div>
    </div>
  );
}
