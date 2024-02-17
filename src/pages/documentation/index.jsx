import MarkdownRenderer from "@/app/components/MarkDownRenderer";
import FileTree from "@/app/components/FileTree";
import { promises as fs } from "fs";
import path from "path";

export async function getStaticProps() {
  const markdownDir = path.join(process.cwd(), "public", "markdown");
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
            path: entryPath,
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
  return (
    <div>
      <FileTree fileTree={fileTree} />
    </div>
  );
}
