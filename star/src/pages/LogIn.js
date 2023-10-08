import React, { useState } from 'react';
import '../styles/LogIn.css';
import logo from "../images/logo.svg";
import { useNavigate } from 'react-router-dom'; 

function LogIn() {
  const navigate = useNavigate(); 

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      navigate('/view', { state: { file } }); 
    }
  };

  const handleButtonFileClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className="gradient-background">
      <div className="login-container">
        <div className="login-form">
          <img src={logo} alt="logo" />
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div id="uploader" className='uploader'>
            <input type="file" id="fileInput" onChange={handleFileSelect} accept=".pdf" style={{ display: 'none' }} />
            <button className="btn btn-primary btn-block btn-lg" onClick={handleButtonFileClick}>
              <span><b>View Suggestions</b></span>
            </button>
            <p>Upload file</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
