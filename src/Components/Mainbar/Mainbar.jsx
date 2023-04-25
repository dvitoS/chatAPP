import React, { useContext } from "react";
import {BsPersonFillAdd} from 'react-icons/bs';
import {MdMoreVert} from 'react-icons/md';
import Messages from '../Messages/Messages';
import Input from '../Messages/Input';
import { ChatContext } from "../../context/ChatContext";


const Mainbar = () => {
    const {data} = useContext(ChatContext);
    return(
        <div className="mainbar">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <BsPersonFillAdd className="img"/>
                    <MdMoreVert className="img"/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Mainbar;