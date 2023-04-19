import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import './Home.css';
import Navbar from "../Navbar/Navbar";


const Home = () =>{
    return(
        <>
        <Navbar />
            <div className="container">
                <Routes>
                    <Route path="Register" element={<Register/>}/>
                    <Route path="Login" element={<Login/>}/>
                </Routes>
            </div>
        </>
    )
}

export default Home;