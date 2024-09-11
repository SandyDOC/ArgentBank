import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "./../src/main.css";

import Home from './pages/Home/Home';
import LogIn from "./pages/LogIn/LogIn";
import User from "./pages/User/User";
import Error from "./pages/Error/Error";

const Router = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/user" element={<User />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default Router;

