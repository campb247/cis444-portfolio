// app entry point, mounts react tree into #root
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// basename matches github pages repo subpath
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/cis444-portfolio">
      <App />
    </BrowserRouter>
  </StrictMode>
);
