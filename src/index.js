import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// -> this gives us access to already created CSS Classes
import 'tachyons';
import App from "./app/containers/App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
