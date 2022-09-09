import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Axios from 'axios';
import SignUp from './signup'
import SignIn from './signin';
import Footer from './Footer';
import Actor from './Actor';
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import Header from "./Header";
import Films from "./Films";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import { HOME } from "../shared/home";
import Profile from "./ProfileComponent";

function Main() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/home" element={<Home  />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path ='/' element={ <Navigate to="/signin"/> } />
                </Routes>
                <Footer />
            
            </div>
        </Router>
    );
}

export default Main;
