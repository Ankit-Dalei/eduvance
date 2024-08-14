import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Toaster
        position="top-right" // Change the position here
        reverseOrder={false} // Optionally reverse the order of toasts
      />
  <App/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
