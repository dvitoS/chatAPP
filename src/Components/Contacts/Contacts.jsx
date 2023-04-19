import React from "react";
import '../Contacts/Contacts.css';
import Navbar from "../Navbar/Navbar";

const Contacts = () =>{
    return(
        <>
            <Navbar />
                <div className="contactsTop">
                    <span className="logo">cYber</span>
                    <div className="user">
                        <img src="" alt="" />
                        <span>Name</span>
                    </div>
                </div> 
        </> 
    );
}

export default Contacts;