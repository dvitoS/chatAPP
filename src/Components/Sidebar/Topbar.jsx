import React, { useContext } from "react";
import './Sidebar.css';
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';
import { AuthContext } from "../../context/AuthContext";


const Topbar = () => {
    const {currentUser} = useContext(AuthContext)
    return(
        <div className="topbar">
            <span className="logo">Very</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>              
            </div>  
        </div>
    )
}

export default Topbar;