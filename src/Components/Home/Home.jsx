import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import './Home.css';



const Home = () =>{
    return(
        <div class="container">
            <Routes>
                <Route path="Register" element={<Register/>}/>
                <Route path="Login" element={<Login/>}/>
            </Routes>

        </div>
    )
}

export default Home;