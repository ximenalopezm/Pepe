import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Viewer, locateSuggestion } from "../Viewer.jsx";
import TextPreview from "./TextPreview.jsx";
import "../styles/PDFCorrection.css";
import logo from "../images/logo.svg";
import Button from "react-bootstrap/Button";

export const PDFCorrection = () => {
  const { state } = useLocation();

  const apiTitles = ['"This Standard primarily addresses structural design requirements for glass and ceramics, it also includes design and verification requirements for non-structural glass and ceramic components."',
'"The window configuration may use passive venting to minimize potential surface contamination by material offgassing or moisture condensation."',
'"Annealed glass shall be designed to a minimum ultimate factor of safety of 3.0 applied to the maximum combined limit load."',
'"The potential for dynamic amplification of the load in the event of a pressure pane failure exists."',
'"The window design shall prevent slipping and rattling of the glass during exposure to the flight and ground transportation, as well as handling, random vibration, and vibroacoustic environments."',
'"The window seal shall meet its performance requirements within the temperature extremes of the seal-to-windowpane interface for the duration of the design life of the window."',
'"A life factor of 4 shall be applied to the design life to account for scatter."',
'"The analysis method provided in the NASGRO® computer program is an acceptable method for analysis of vehicle/element glass structure with the following constraints and assumptions."',
'"The equation for stress intensity shall be applicable for glass structure where the critical flaw depth is small with respect to the thickness of the glass."',
'"Each windowpane shall be designed using average flaw growth properties (KI versus velocity) and four times the required design life to account for scatter in the flaw growth data."']

const apiText = ['The report is not clear on what these non-structural components are. It would be helpful to provide examples or further clarification to ensure comprehensive understanding.',
'The report should explain the potential risks or drawbacks of passive venting, as there may be negative effects on the structural integrity or performance of the windows.',
'The report does not provide an explanation or justification for why a factor of safety of 3.0 is appropriate for annealed glass. It would be helpful to include the reasoning behind this requirement.']

  const handleClick = () => {
    locateSuggestion();
  };

  return (
    <div className="main-component">
      
      <div className="container-fluid">
        <div className="row">
        
          <div className="col-8">
            <Viewer file={state.file} titles={apiTitles}/>
          </div>
          <div className="col-4">
            <div className="warning-container">
              <img src={logo} className="logo" alt="logo" />
              <div className="container">
                <TextPreview
                  onClick={handleClick}
                  cardTitle={apiTitles[0]}
                  cardText={apiText[0]}/>
                <TextPreview 
                onClick={handleClick}
                cardTitle={apiTitles[1]}
                cardText={apiText[1]}
                />
                <TextPreview
                onClick={handleClick}
                cardTitle={apiTitles[2]}
                cardText={apiText[2]}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
