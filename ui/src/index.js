import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Toolbar from './components/Toolbar/Toolbar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toolbar/>
    <App />
  </React.StrictMode>
);
