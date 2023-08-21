import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Global } from 'styles/Global';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="practice-with-mentor">
    <Provider store={store}>
      <App />
      <Global />
      <ToastContainer autoClose={1500} />
    </Provider>
  </BrowserRouter>
);
