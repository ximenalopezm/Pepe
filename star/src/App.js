import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Viewer from './Viewer';
import LogIn from './pages/LogIn';
import { PDFCorrection } from './components/PDFCorrection';

// Chiques puse esto en la app para ver como se veia e irle moviendo para hacer el fondo del login
function App() {

  return (
      <Router>
      <Routes> 
        <Route path="/" element={<LogIn />} /> 
        <Route path="/view" element={<PDFCorrection />} /> 
      </Routes>
    </Router>
  );
}

export default App;
