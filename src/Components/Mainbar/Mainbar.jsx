import React from "react";
import {BsPersonFillAdd} from 'react-icons/bs';
import {MdMoreVert} from 'react-icons/md';
import Messages from '../Messages/Messages';
import Input from '../Messages/Input';


const Mainbar = () => {
    return(
        <div className="mainbar">
            <div className="chatInfo">
                <span>Doris</span>
                <div className="chatIcons">
                    <BsPersonFillAdd class="img"/>
                    <MdMoreVert class="img"/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Mainbar;