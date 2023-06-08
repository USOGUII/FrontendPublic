import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Uselol from './Components/uselol';
import TrueRouter from './TrueRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TrueRouter />
  </React.StrictMode>
);

