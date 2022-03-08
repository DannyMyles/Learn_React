import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  Nav from './component/nav'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './component/home';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Nav />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
