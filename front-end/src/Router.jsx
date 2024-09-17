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

// import { useSelector } from 'react-redux'; // Permet d'accéder au state du store Redux
// import UserHeader from './components/UserHeader/UserHeader';
const Router = () => {
    // const isAuthenticated = useSelector((state) => state.user.isAuthenticated); // Permet de savoir si l'utilisateur est authentifié 
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                {/* {isAuthenticated ? <UserHeader /> : <Header />} Affiche le UserHeader si authentifié sinon le Header */}
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

