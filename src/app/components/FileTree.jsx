import React, { useState } from "react";
import { useFileSelection } from "./FileSelectionContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaFolder, FaFolderOpen, FaFile } from "react-icons/fa";

const Directory = ({ directory }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { selectFile } = useFileSelection();

  const toggleCollapse = (e) => {
    e.stopPropagation();
    setCollapsed(!collapsed);
  };

  return (
    <div className="mb-2">
      <div
        onClick={toggleCollapse}
        className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200"
      >
        {collapsed ? (
          <FaFolder className="text-yellow-500 mr-2" />
        ) : (
          <FaFolderOpen className="text-yellow-500 mr-2" />
        )}
        <span className="text-gray-800 dark:text-gray-200 font-medium">
          {directory.name}
        </span>
      </div>
      <AnimatePresence>
        {!collapsed && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4"
          >
            {directory.children.map((child) =>
              child.type === "directory" ? (
                <li key={child.name}>
                  <Directory directory={child} />
                </li>
              ) : (
                <li key={child.name}>
                  <FileItem file={child} selectFile={selectFile} />
                </li>
              ),
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const FileItem = ({ file, selectFile }) => (
  <div
    className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200"
    onClick={() => selectFile(file.path)}
  >
    <FaFile className="text-gray-500 mr-2" />
    <span className="text-gray-700 dark:text-gray-300">
      {file.name.slice(0, -3)}
    </span>
  </div>
);

const FileTree = ({ fileTree }) => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 overflow-auto max-h-[calc(100vh-200px)]">
      {fileTree.map((item) =>
        item.type === "directory" ? (
          <Directory key={item.name} directory={item} />
        ) : (
          <FileItem key={item.name} file={item} />
        ),
      )}
    </div>
  );
};

export default FileTree;
