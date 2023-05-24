import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LayoutPrinc from './layout/layout';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import { store } from './store/Store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <LayoutPrinc />
    </BrowserRouter>
  </Provider>
);
