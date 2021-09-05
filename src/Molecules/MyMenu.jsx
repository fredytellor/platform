import React, { useState } from "react";
import IconMenu from "../Atoms/IconMenu";
import { Link } from "react-router-dom";
import "../Styles/Molecules/MyMenu.css";

const MyMenu = () => {
    const [index, setIndex] = useState("");
    const menuItems = ["menu", "", "apps", "paper", "stats", "chat"];
    return (
        <div className="mymenu">
            <div className="mymenu-div">
                {
                    menuItems.map((item) => <div className="mymenu-icon-div">
                        <Link to={`/${item}`}>
                            <IconMenu
                             key={item} name={item} 
                             isActive={item === index} 
                             selectItem={() => setIndex(item)} 
                             /></Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyMenu;