import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css"; // Importa los estilos de FontAwesome
import Sidebar from "./Sidebar"; // Importar el componente de sidebar

function FileUpload() {
  const [file, setFile] = useState(null);
  const [inconsistencies, setInconsistencies] = useState([]);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];

    // Verificar si el archivo es un PDF
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleFileSubmit = async () => {
    if (file) {
      // Leer el contenido del archivo y procesarlo
      const reader = new FileReader();

      reader.onload = async (event) => {
        const fileContent = event.target.result;

        // Aquí puedes agregar la lógica para procesar el archivo PDF y detectar oraciones sin sentido.
        // Por simplicidad, se mostrará un mensaje en la consola.
        console.log("PDF file was uploaded successfully");
      };

      reader.readAsArrayBuffer(file);
    } else {
      alert("Select a PDF file");
    }
  };

  return (
    <div className="file-upload">
      <i className="fa fa-upload"></i>
      <input type="file" accept=".pdf" onChange={handleFileUpload} />
      <br />
      <button onClick={handleFileSubmit}>Submit</button>
    </div>
  );
}

export default FileUpload;
