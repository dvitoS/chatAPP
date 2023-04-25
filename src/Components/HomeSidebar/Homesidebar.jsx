import React, { useState } from "react";
import  './Homesidebar.css';
import {HiOutlineChevronRight} from 'react-icons/hi';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import {BiExit} from 'react-icons/bi';
import Property1 from '../../Assets/apartman1.jpg';
import Property2 from '../../Assets/apartman2.jpg';
import Property3 from '../../Assets/exterior-house1.jpg';
import Property4 from '../../Assets/Image-2.jpg';
import Property5 from '../../Assets/microapt5.jpg';


const Homesidebar = () => {
    const [fontSize, setFontSize] = useState(15);
    
    function increaseFontSize() {
        setFontSize(fontSize + 1);
    }

    function decreaseFontSize() {
    setFontSize(fontSize - 1);
    }

    return(
        <div className="containersidebar" style={{ fontSize: `${fontSize}px`}}>
            <div className="contentboxsidebar">
                <div className="searchsidebar">
                    <input type="text" placeholder="Search" />
                </div>
                <h2>Contacts</h2>
                <div className="cardcontainer">
                    <div className="card">
                        <div className="card_thumbnail">
                            <img className="img" src={Property1} width="430px" height="350px"alt="" />
                            <span className="imgTitle">Colorado</span>
                        </div>     
                    </div>
                </div>
                <div className="cardcontainer">
                    <div className="card">
                        <div className="card_thumbnail">
                            <img className="img" src={Property2} width="430px" height="350px"alt="" />
                            <span className="imgTitle">Miami</span>
                        </div>     
                    </div>
                </div>
                <div className="cardcontainer">
                    <div className="card">
                        <div className="card_thumbnail">
                            <img className="img" src={Property3} width="430px" height="350px"alt="" />
                            <span className="imgTitle">San Francisco</span>
                        </div>     
                    </div>
                </div>
                <div className="cardcontainer">
                    <div className="card">
                        <div className="card_thumbnail">
                            <img className="img" src={Property4} width="430px" height="350px"alt="" />
                            <span className="imgTitle">Los Angeles</span>
                        </div>     
                    </div>
                </div>
                <div className="cardcontainer">
                    <div className="card">
                        <div className="card_thumbnail">
                            <img className="img" src={Property5} width="430px" height="350px"alt="" />
                            <span className="imgTitle">New York</span>
                        </div>     
                    </div>
                </div>
                <div className="settingsbar">
                    <h2>Settings</h2>
                    <div className="settingscard">
                        <li className="settingslist">
                            <HiOutlineChevronRight className="icon" />
                            Language
                        </li>
                        <li className="settingslist">
                            <HiOutlineChevronRight className="icon" />
                            Theme
                        </li>
                        <li className="settingslist" onClick={increaseFontSize}>
                            <AiOutlinePlus className="icon" />
                            Increase font size
                        </li>
                        <li className="settingslist" onClick={decreaseFontSize}>
                            <AiOutlineMinus className="icon" />
                            Decrease font size 
                        </li>
                        <li className="settingslist">
                            <BiExit className="icon" />
                            Exit
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homesidebar;