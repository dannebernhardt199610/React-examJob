import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactRouterSetup from './components/ReactRouterSetup';


ReactDOM.render(
  <ReactRouterSetup>
    <App />
  </ReactRouterSetup>,
  document.getElementById('root')
);
