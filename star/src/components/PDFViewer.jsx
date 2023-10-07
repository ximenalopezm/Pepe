import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Sidebar from "./Sidebar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ fileContent, inconsistencies }) {
  return (
    <div className="pdf-viewer">
      <div className="pdf-content">
        <Document file={{ data: fileContent }}>
          {Array.from(new Array(fileContent.numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
      <div className="inconsistencies-sidebar">
        <h2>Inconsistencias</h2>
        <ul>
          {inconsistencies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <Sidebar inconsistencies={inconsistencies} />{" "}
      {/* Agregar el sidebar aquí */}
    </div>
  );
}

export default PDFViewer;
