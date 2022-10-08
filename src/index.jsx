import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './app/components/Hello';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello greeting={"Hello React Ninja"} />
  </React.StrictMode>
);
