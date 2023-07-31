import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import LotusGarden from './LotusGarden';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lotusgarden" element={<LotusGarden />}/>
        </Routes>
      </div>
  );
}

export default App;