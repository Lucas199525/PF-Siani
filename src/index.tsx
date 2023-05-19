import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LayoutPrinc from './layout/layout';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutPrinc />
    </BrowserRouter>
  </React.StrictMode>
);
