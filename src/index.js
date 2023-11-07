import React from 'react';
import css from './index.css'
import ReactDOM, { createRoot } from 'react-dom/client';
import Main from './Main.js';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Main />);

