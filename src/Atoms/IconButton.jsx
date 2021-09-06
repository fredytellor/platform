import React from "react";

import "../Styles/Atoms/IconButton.css";

const IconButton = (props) => {
    const { imgSrc, isNotifications } = props;
    return (
        <div className="iconbutton-div">
            <img className={isNotifications ? "iconbutton-bell" : "iconbutton-img"} src={imgSrc} alt="notification bell icon" />
            {isNotifications && <div className="stackball-div"></div>}
        </div>
    );
};

export default IconButton;
