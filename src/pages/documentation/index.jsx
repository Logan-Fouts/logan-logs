import { useState } from "react";
import fs from "fs";
import path from "path";
import "./../../app/globals.css";
import NavBar from "@/app/components/NavBar.client";
import MarkdownRenderer from "@/app/components/MarkDownRenderer";
import { document } from "postcss";

function getDirectoryStructure(dirPath, basePath = "") {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  return entries
    .map((entry) => {
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.join(basePath, entry.name);
      if (entry.isDirectory()) {
        return {
          name: entry.name,
          type: "directory",
          children: getDirectoryStructure(
            fullPath,
            path.join(basePath, entry.name),
          ),
        };
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        return {
          name: entry.name.replace(".md", ""),
          type: "file",
          path: relativePath
            .replace(/^public\/markdown\//, "")
            .replace(/\.md$/, ""),
        };
      }
    })
    .filter((entry) => entry != null);
}

export async function getStaticProps() {
  const markdownDir = path.join(process.cwd(), "public/markdown");
  const structure = getDirectoryStructure(markdownDir);

  return { props: { structure } };
}

function handleCollapse(item) {
  console.log("handling collapse for " + item.name);
  console.log("It has children: ");
  item.children.forEach((child) => {
    console.log(child.name);
  });

  item.children.forEach((child) => {
    var element = document.getElementById(child);
    console.log("collapsing " + element);
    element.style.display = "none";
  });
}

function RenderDirectory({ structure, basePath = "", onFileSelect }) {
  const [collapsedItems, setCollapsedItems] = useState({});

  const handleCollapse = (itemName) => {
    setCollapsedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <ul className="text-white text-2xl flex flex-col w-1/5 ml-4 mr-24 z-10">
      {structure.map((item) => {
        const isCollapsed = collapsedItems[item.name];

        return (
          <li
            key={item.name}
            className={`text-green-800 ${basePath ? "m-2" : ""}`}
          >
            {item.type === "directory" ? (
              <>
                <button onClick={() => handleCollapse(item.name)}>
                  <span className="font-bold m-0 p-0">
                    {item.name} {isCollapsed ? "+" : "-"}
                  </span>
                </button>
                {!isCollapsed && (
                  <RenderDirectory
                    structure={item.children}
                    basePath={`${basePath}/${item.name}`}
                    onFileSelect={onFileSelect}
                  />
                )}
              </>
            ) : (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onFileSelect(`/markdown${basePath}/${item.name}.md`);
                }}
                className={`cursor-pointer text-white text-lg m-0 p-0 ${basePath ? "m-2" : ""}`}
              >
                {item.name}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const DocumentationIndex = ({ structure }) => {
  const [currentFilePath, setCurrentFilePath] = useState(
    "/markdown/Random/Readme.md",
  );

  const handleFileSelect = (filePath) => {
    setCurrentFilePath(filePath);
  };

  return (
    <div className="bg-black w-screen h-auto pt-16 flex flex-row">
      <NavBar />
      <RenderDirectory structure={structure} onFileSelect={handleFileSelect} />
      <MarkdownRenderer filePath={currentFilePath} />
    </div>
  );
};

export default DocumentationIndex;
