import React from "react"
import './Register.css';
import Avatar from '../Assets/avatar.png';


const Register = () =>{
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">VeryChat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{display:"none"}} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Avatar} alt="" />
                    </label>
                    <p>Add an avatar</p>
                    <button>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register;