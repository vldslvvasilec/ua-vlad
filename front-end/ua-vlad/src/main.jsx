import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './config/i18n.js';

createRoot(document.getElementById('root')).render(
  <App />
)
