import React from "react";
import homeIcon from "../assets/static/menu/home-icon.png";


const IconMenu = (props) => {
    const { name } = props;
    let currentIcon = "";
    switch (name) {
        case "home":
            currentIcon = homeIcon;
            break;
        default: break;
    }
    return (<img
        src={currentIcon}
        alt={`icon ${name}`}
    />);
};

export default IconMenu;