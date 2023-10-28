import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Garden from './Garden';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garden" element={<Garden />}/>
        </Routes>
      </div>
  );
}

export default App;