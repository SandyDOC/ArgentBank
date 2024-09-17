import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
import Router from './Router';
import store from "./redux/store";
import { Provider } from "react-redux";
import { setToken } from './redux/userSlice';  // Import de l'action pour réhydrater le token

// Récupérer le token depuis localStorage
// const token = localStorage.getItem('token');
// if (token) {
//   store.dispatch(setToken(token));  // Dispatch l'action pour initialiser le token dans Redux
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);

