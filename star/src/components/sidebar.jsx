import React from "react";
import logo from "../images/logo.svg";
import TextPreview from './TextPreview';

const sidebar = () => {
    return (
        <>
        <div className="sidebar">
            <div className="cont-logo"> 
                <logo />
            </div>
            <div className="cont-titulo">
                <h1>Recommendations</h1>
            </div>
            <div className="cont-sugerencias">
                <TextPreview />
            </div>
            
        </div>
        </>
    );
};
export default sidebar;