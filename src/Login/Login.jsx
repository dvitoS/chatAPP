import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../Register/Register.css';


const Login = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].value;
    }

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">VeryApp</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account?
                    <Link to="/register">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login;