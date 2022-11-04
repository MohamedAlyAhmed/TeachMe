import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css/animate.min.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import 'fontawesome-free/css/all.min.css';
import Header from './components/Header/nav_Bar';
import LandingPage from './components/LandingPage/langingPage';
=======
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
>>>>>>> 1cb3c3de4cfb24e8b9d4aef66db20742080aaea9

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>
);
