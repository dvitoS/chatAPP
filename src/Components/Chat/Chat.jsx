import React from "react";
import '../Chat/Chat.css';
import Sidebar from '../Sidebar/Sidebar';
import Mainbar from '../Mainbar/Mainbar';
import Search from '../Search/Search';

// Chat room page

const Chat = () =>{
    return(
        <div className="main">
            <div className="container">
                <Sidebar />
                <Mainbar />
            </div>
            
        </div>
    )
}

export default Chat;