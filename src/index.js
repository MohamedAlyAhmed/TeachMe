import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css/animate.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontawesome-free/css/all.min.css';
import Header from './components/Header/nav_Bar';
import LandingPage from './components/LandingPage/langingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>
);
