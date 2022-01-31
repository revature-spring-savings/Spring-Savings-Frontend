import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactStrict from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(
  <ReactStrict>
  
      <App />
  
  </ReactStrict>,
  document.getElementById('root'),
);