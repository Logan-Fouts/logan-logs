import React from "react";

const FileSelectionContext = React.createContext({
  selectedFile: null,
  selectFile: () => {},
});

export const FileSelectionProvider = ({ children }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const selectFile = (filePath) => {
    setSelectedFile(filePath);
  };

  return (
    <FileSelectionContext.Provider value={{ selectedFile, selectFile }}>
      {children}
    </FileSelectionContext.Provider>
  );
};

export const useFileSelection = () => React.useContext(FileSelectionContext);
