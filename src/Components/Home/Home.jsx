import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import './Home.css';
import Navbar from "../Navbar/Navbar";
import Homesidebar from "../HomeSidebar/Homesidebar";


const Home = () =>{
    const [fontSize, setFontSize] = useState(16);
    
    const handleFontSizeChange = () => {
        setFontSize(prevFontSize => prevFontSize + 2);
    };
    return(
            <div className="container" style={{ fontSize: `${fontSize}px`}}> 
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