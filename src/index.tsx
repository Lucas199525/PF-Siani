import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LayoutPrinc from './layout/layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LayoutPrinc />
  </React.StrictMode>
);
