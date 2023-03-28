import React from "react";
import Topbar from './Topbar';
import '../Sidebar/Sidebar.css';
import Search from '../Search/Search'


const Sidebar = () => {
    return(
        <div className="sidebar">
            <Topbar />
            <Search />
        </div>
    )
}

export default Sidebar;