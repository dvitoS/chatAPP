import React from "react";
import {BsSend} from 'react-icons/bs';
import {FcAddImage} from 'react-icons/fc';
import {MdAttachFile} from 'react-icons/md';

const Input = () =>{
    return(
        <div class="input">
            <input type="text" placeholder="type something..."/>
            <div className="send">
                <MdAttachFile class="img"/>
                <input type="file" style={{display:"none"}} id="file" />
                <label htmlFor="file">
                    <FcAddImage class="img"/>
                </label>
                <button class="button">
                    <BsSend class="imgbtn" />
                </button>
            </div>
        </div>
    )
}

export default Input;