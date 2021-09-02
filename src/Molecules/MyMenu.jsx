import React from "react";
import IconMenu from "../Atoms/IconMenu";

import "../Styles/Molecules/MyMenu.css";

const MyMenu = () => {
    const menuItems = ["menu", "home", "apps", "paper", "stats", "chat"];
    return (
        <>
            <div className="mymenu-div">
                {
                    menuItems.map((item) => <IconMenu key={item} name={item} isActive={item=="home"} />)
                }
            </div>
        </>
    );
};

export default MyMenu;