import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "font-awesome/css/font-awesome.min.css"; // Importa los estilos de FontAwesome

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleFileSubmit = async () => {
    if (file) {
      // Verificar si el archivo es un PDF
      if (file.type === "application/pdf") {
        // Aquí puedes agregar la lógica para procesar el archivo PDF y detectar oraciones sin sentido.
        // Por simplicidad, se mostrará un mensaje en la consola.
        console.log("Archivo PDF cargado correctamente.");
      } else {
        alert("Por favor, selecciona un archivo PDF válido.");
      }
    } else {
      alert("Selecciona un archivo primero.");
    }
  };

  return (
    <div>
      <label htmlFor="pdfFile" className="custom-file-input">
        <i className="fa fa-upload"></i> Subir archivo
      </label>
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      <button onClick={handleFileSubmit}>Enviar Archivo</button>
    </div>
  );
}

export default FileUpload;
