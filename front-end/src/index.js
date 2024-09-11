import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";

import Router from './Router';
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);

