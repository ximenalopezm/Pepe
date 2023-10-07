import React from 'react';
import '../styles/LogIn.css';
import logo from "../images/logo.svg";

function LogIn() {
    return (
      <div className="gradient-background">
        <div className="login-container">
          <div className="login-form">
            <img src={logo} alt="logo" />
            <div className="text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div id = "uploader" className='uploader'>
              <button className="btn btn-primary btn-block btn-lg" type="submit">
                <span> <b>Select PDF file</b></span>
              </button>
              <p>or drag and drop files here</p>
            </div>

          </div>
        </div>
      </div>
    
  );
}

export default LogIn;
