import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();
