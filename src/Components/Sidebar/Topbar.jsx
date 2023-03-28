import React from "react";
import './Sidebar.css';

const Topbar = () => {
    return(
        <div className="topbar">
            <span className="logo">ChatApp</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/15975880/pexels-photo-15975880.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                <span>Vito</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Topbar;