import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import './Home.css';
import Navbar from "../Navbar/Navbar";
import Homesidebar from "../HomeSidebar/Homesidebar";


const Home = () =>{
    return(
            <div className="container">   
                <Navbar />        
                    <Routes>
                        <Route path="Register" element={<Register/>}/>
                        <Route path="Login" element={<Login/>}/>
                    </Routes>
                    <Homesidebar />
            </div>
    )
}

export default Home;