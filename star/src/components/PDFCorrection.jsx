import React, { Component } from 'react'
import { useLocation } from "react-router-dom";
import Viewer from '../Viewer.jsx'
import '../styles/PDFCorrection.css'

export const PDFCorrection = () => {
  const { state } = useLocation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Viewer file={ state.file }/>
        </div>
        <div className="col-4">
            <h1>Todo</h1>
        </div>
      </div>
    </div>
  )
}
