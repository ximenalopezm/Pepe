import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import { PDFCorrection } from './components/PDFCorrection';

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
