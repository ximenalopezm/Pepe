import React, { Component } from 'react'
import Viewer from '../Viewer.jsx'
import '../styles/PDFCorrection.css'

export const PDFCorrection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Viewer />
        </div>
        <div className="col-4">
            <h1>Todo</h1>
        </div>
      </div>
    </div>
  )
}
