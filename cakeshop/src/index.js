import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css'; // Global CSS
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
