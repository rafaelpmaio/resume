import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/global.css';
import reportWebVitals from './reportWebVitals';
import { AppRoutes } from 'components/AppRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

reportWebVitals();
