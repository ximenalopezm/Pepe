import React from "react";
import logo from "../images/Logo.png";

function Sidebar({ inconsistencies }) {
  return (
    <div className="sidebar">
      <h2>
        <img src={logo} alt="logo" />
      </h2>
      <ul>
        {inconsistencies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
