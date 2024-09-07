import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './redux/store';

import "./../src/main.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import LogIn from "./pages/LogIn/LogIn";
import Error from "./pages/Error/Error";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/logIn" element={<LogIn />}/>
        <Route path="*" element={<Error/>}/>
      </Routes> 
      <Footer/>
    </Router> 
  </React.StrictMode>
);

// import React from "react";
// import { createRoot } from "react-dom/client";

// import Router from "./Router";
// import { Provider } from "react-redux";
// import store from "./store/store";

// import "./main.scss";

// const container = document.getElementById("root");
// const root = createRoot(container);

// /* Rendering the Provider component with the store and the Router component. */
// root.render(
// 	<Provider store={store}>
// 		<React.StrictMode>
// 			<Router />
// 		</React.StrictMode>
// 	</Provider>
// );