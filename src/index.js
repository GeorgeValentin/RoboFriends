import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// -> this gives us access to already created CSS Classes
import 'tachyons';
import CardList from "./app/components/CardList";
import { robots } from "./app/utils/robots";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>
);
