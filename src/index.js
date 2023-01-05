import React from 'react';
import ReactDOM from 'react-dom/client';
import 'animate.css/animate.min.css';
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom';


{/* <React.StrictMode> */}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
