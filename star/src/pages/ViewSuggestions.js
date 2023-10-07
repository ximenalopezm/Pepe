import React, { useState } from "react";
import FileUpload from "./FileUpload";
import PDFViewer from "./PDFViewer";

function ViewSuggestions() {
  const [fileContent, setFileContent] = useState("");
  const [inconsistencies, setInconsistencies] = useState([]);

  const handleFileUploadComplete = (content, detectedInconsistencies) => {
    setFileContent(content);
    setInconsistencies(detectedInconsistencies);
  };

  return (
    <div className="app">
      {fileContent ? (
        <PDFViewer
          fileContent={fileContent}
          inconsistencies={inconsistencies}
        />
      ) : (
        <FileUpload onFileUploadComplete={handleFileUploadComplete} />
      )}
    </div>
  );
}

export default ViewSuggestions;
