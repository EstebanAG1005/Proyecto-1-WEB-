import React, { createRoot } from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/extensions
import App from './App.js';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
