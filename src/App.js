import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Unraveling from './Unraveling';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unraveling" element={<Unraveling />}/>
        </Routes>
      </div>
  );
}

export default App;




