import React from "react";
import Topbar from './Topbar';
import '../Sidebar/Sidebar.css';
import Search from '../Search/Search'
import Chats from "../Chats/Chats";


const Sidebar = () => {
    return(
        <div className="sidebar">
            <Topbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar;