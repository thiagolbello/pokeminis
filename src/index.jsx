import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './Firebase';
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);