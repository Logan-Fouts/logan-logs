import React from "react";
import { useFileSelection } from "./FileSelectionContext";

const Directory = ({ directory }) => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { selectFile } = useFileSelection();

  return (
    <div className="z-20 text-left">
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
        className="text-green-800 text-lg z-20"
      >
        {directory.name} {collapsed ? "+" : "-"}
      </div>
      {!collapsed && (
        <ul className="z-20">
          {directory.children.map((child) =>
            child.type === "directory" ? (
              <li key={child.name} className="ml-4 z-20 text-xs sm:text-xl">
                <Directory directory={child} />
              </li>
            ) : (
              <li
                className="sm:ml-8"
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
    <div className="w-3/12 sm:w-1/5 mr-4 sm:ml-4 z-20 mr-8 overflow-auto text-center text-xs sm:text-lg">
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
