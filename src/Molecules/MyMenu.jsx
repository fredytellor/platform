import React, { useState, useEffect } from "react";
import IconMenu from "../Atoms/IconMenu";

import "../Styles/Molecules/MyMenu.css";

const MyMenu = () => {
    const [index, setIndex] = useState("menu");
    const menuItems = ["menu", "home", "apps", "paper", "stats", "chat"];
    return (
        <>
            <div className="mymenu-div">
                {
                    menuItems.map((item) => <IconMenu key={item} name={item} isActive={item === index} selectItem={()=>setIndex(item)} />)
                }
            </div>
        </>
    );
};

export default MyMenu;