import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import {Viewer, locateSuggestion} from "../Viewer.jsx";
import TextPreview from "./TextPreview.jsx";
import "../styles/PDFCorrection.css";
import logo from "../images/logo.svg";

export const PDFCorrection = () => {
  const { state } = useLocation();

  const handleClick = () => {
    locateSuggestion();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Viewer file={state.file} />
        </div>
        <div className="col-4">
          <div className="warning-container">
            <img src={logo} className="logo" alt="logo" />
            <div className="container">
              <TextPreview onClick={handleClick} cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
              <TextPreview cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
              <TextPreview cardText="Hola como se encuentra el dia de hoy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
