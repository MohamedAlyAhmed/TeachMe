import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css/animate.min.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './UI/components/Header/nav_Bar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>
);
