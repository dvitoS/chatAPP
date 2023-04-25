import React from "react";
import  './Homesidebar.css';


const Homesidebar = () => {
    return(
        <div className="containersidebar">
            <div className="contentboxsidebar">
                <div className="searchsidebar">
                    <input type="text" placeholder="Search" />
                </div>
                <h2>Contacts</h2>
                <div className="cardcontainer">
                    <div className="card">Card number</div>
                    <div className="card">Card number</div>
                    <div className="card">Card number</div>
                    <div className="card">Card number</div>
                    <div className="card">Card number</div>
                    <div className="card">Card number</div>
                </div>
                <div className="settingsbar">
                    <h2>Settings</h2>
                    <div className="settingscard">Setting</div>
                </div>
            </div>
        </div>
    );
};

export default Homesidebar;