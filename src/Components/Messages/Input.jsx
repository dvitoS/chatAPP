import React from "react";
import {BsSend} from 'react-icons/bs';
import {FcAddImage} from 'react-icons/fc';
import {MdAttachFile} from 'react-icons/md';

const Input = () =>{
    return(
        <div className="input">
            <input type="text" placeholder="type something..."/>
            <div className="send">
                <MdAttachFile className="img"/>
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <FcAddImage className="img"/>
                </label>
                <button className="button">
                    <BsSend className="imgbtn" />
                </button>
            </div>
        </div>
    )
}

export default Input;