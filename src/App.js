import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SakuraGarden from './SakuraGarden';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garden" element={<SakuraGarden />}/>
        </Routes>
      </div>
  );
}

export default App;