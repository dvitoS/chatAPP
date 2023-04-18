import React from "react"
import { Link } from "react-router-dom";
import '../Register/Register.css';


const Login = () =>{
 

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">VeryApp</span>
                <span className="title">Login</span>
                <form>
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