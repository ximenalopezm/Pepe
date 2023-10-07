import React from "react";
import "../styles/LogIn.css";
import logo from "../images/Logo.png";
import FileUploader from "../components/FileUploader";

function LogIn() {
  return (
    <div className="gradient-background">
      <div className="login-container">
        <div className="login-form">
          <img src={logo} alt="logo" />

          <div id="uploader" className="uploader">
            <FileUploader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
