import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Viewer, locateSuggestion } from "../Viewer.jsx";
import TextPreview from "./TextPreview.jsx";
import "../styles/PDFCorrection.css";
import logo from "../images/logo.svg";
import Button from "react-bootstrap/Button";

export const PDFCorrection = () => {
  const { state } = useLocation();

  const handleClick = () => {
    locateSuggestion();
  };

  return (
    <div className="main-component">
      
      <div className="container-fluid">
        <div className="row">
        
          <div className="col-8">
            <Viewer file={state.file} />
          </div>
          <div className="col-4">
            <div className="warning-container">
              <img src={logo} className="logo" alt="logo" />
              <div className="container">
                <TextPreview
                  onClick={handleClick}
                  cardTitle="This is card 1"
                  cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <TextPreview 
                cardTitle="This is card 2"
                cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <TextPreview
                cardTitle="This is card 2"
                cardText="Hola como se encuentra el dia de hoy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
