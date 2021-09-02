import React from "react";
import menuIcon from "../assets/static/menu/menu-icon.png";
import homeIcon from "../assets/static/menu/home-icon.png";
import appsIcon from "../assets/static/menu/apps-icon.png";
import paperIcon from "../assets/static/menu/paper-icon.png";
import statsIcon from "../assets/static/menu/stats-icon.png";
import chatIcon from "../assets/static/menu/chat-icon.png";
import menuIconBold from "../assets/static/menu/menu-icon-bold.png";
import homeBoldIcon from "../assets/static/menu/home-icon-bold.png";
import appsBoldIcon from "../assets/static/menu/apps-icon-bold.png";
import paperBoldIcon from "../assets/static/menu/paper-icon-bold.png";
import statsBoldIcon from "../assets/static/menu/stats-icon-bold.png";
import chatBoldIcon from "../assets/static/menu/chat-icon-bold.png";

import "../Styles/Atoms/IconMenu.css";

const IconMenu = (props) => {
    const { name, isActive } = props;
    let currentIcon = "";
    let currentBoldIcon = "";
    switch (name) {
        case "home":
            currentIcon = homeIcon;
            currentBoldIcon = homeBoldIcon;
            break;
        case "apps":
            currentIcon = appsIcon;
            currentBoldIcon = appsBoldIcon;
            break;
        case "paper":
            currentIcon = paperIcon;
            currentBoldIcon = paperBoldIcon;
            break;
        case "stats":
            currentIcon = statsIcon;
            currentBoldIcon = statsBoldIcon;
            break;
        case "chat":
            currentIcon = chatIcon;
            currentBoldIcon = chatBoldIcon;
            break;
        default:
            currentIcon = menuIcon;
            currentBoldIcon = menuIconBold;
            break;
    }

    return (
        <div className={isActive ? "iconmenu-div-bold" : "iconmenu-div"}>
            <img
                className={isActive ? "iconmenu-img-bold" : "iconmenu-img"}
                src={isActive ? currentBoldIcon : currentIcon}
                alt={`icon ${name}`}
                onClick={() => props.selectItem()}
            />
        </div>);
};

export default IconMenu;