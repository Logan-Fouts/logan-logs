import React from "react";
import MarkdownRenderer from "./MarkDownRenderer";
import { useFileSelection } from "./FileSelectionContext";

const Directory = ({ directory }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { selectFile } = useFileSelection();
  // selectFile("markdown/Random/Readme.md")

  return (
    <div>
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
        className="text-green-800 text-2xl"
      >
        {directory.name} {collapsed ? "[+]" : "[-]"}
      </div>
      {!collapsed && (
        <ul>
          {directory.children.map((child) =>
            child.type === "directory" ? (
              <li key={child.name} className="ml-4">
                <Directory directory={child} />
              </li>
            ) : (
              <li
                className="ml-8"
                key={child.name}
                style={{ cursor: "pointer" }}
                onClick={() => selectFile(child.path)}
              >
                {child.name}
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
};

export { Directory };

const FileTree = ({ fileTree }) => {
  return (
    <div className="w-1/5 mr-4 ml-4">
      {fileTree.map((item) =>
        item.type === "directory" ? (
          <Directory key={item.name} directory={item} />
        ) : (
          <div key={item.name}>{item.name}</div>
        ),
      )}
    </div>
  );
};

export default FileTree;
