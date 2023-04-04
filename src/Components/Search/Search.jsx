import React from "react";

const Search = () =>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find user"/>
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/15804967/pexels-photo-15804967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="userChatInfo">
                    <span>Doris</span>
                </div>
            </div>
        </div>
    )
};

export default Search;