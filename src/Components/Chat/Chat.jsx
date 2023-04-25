import React from "react";
import '../Chat/Chat.css';
import Sidebar from '../Sidebar/Sidebar';
import Mainbar from '../Mainbar/Mainbar';
import Navbar from "../Navbar/Navbar";

// Chat room page

const Chat = () =>{
    return(
        <>
        <Navbar />
            <div className="main">
                <div className="container">       
                    <Sidebar />
                    <Mainbar />
                </div>
        </div>
        </>
    )
}

export default Chat;