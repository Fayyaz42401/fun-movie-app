import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import App from './App';
import {Context} from './Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
    {/* <Router> */}
      <App />
    {/* </Router> */}
    </Context>
  </React.StrictMode>
);

