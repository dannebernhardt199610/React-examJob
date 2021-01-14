import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactRouterSetup from './components/ReactRouterSetup';



ReactDOM.render(
  <React.StrictMode>
  <ReactRouterSetup>
    <App />
  </ReactRouterSetup>
  </React.StrictMode>,
  document.getElementById('root')
);
