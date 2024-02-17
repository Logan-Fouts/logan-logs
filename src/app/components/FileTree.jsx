import React from "react";

const Directory = ({ directory }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div>
      <div
        onClick={() => setCollapsed(!collapsed)}
        style={{ cursor: "pointer", fontWeight: "bold" }}
      >
        {directory.name} {collapsed ? "[+]" : "[-]"}
      </div>
      {!collapsed && (
        <ul style={{ marginLeft: "20px" }}>
          {directory.children.map((child) =>
            child.type === "directory" ? (
              <li key={child.name}>
                <Directory directory={child} />
              </li>
            ) : (
              <li key={child.name}>{child.name}</li>
            ),
          )}
        </ul>
      )}
    </div>
  );
};

const FileTreeComponent = ({ fileTree }) => {
  return (
    <div>
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

export default FileTreeComponent;
