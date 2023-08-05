import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import Media from './components/Media';


ReactDOM.render(
  <React.StrictMode>
     
    <App />
    <Media />

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
