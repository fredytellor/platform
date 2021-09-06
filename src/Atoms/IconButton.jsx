import React, { useState } from "react";
import NotificationsCard from "../Organisms/NotificationsCard";

import "../Styles/Atoms/IconButton.css";

const IconButton = (props) => {
    const { imgSrc, isNotifications } = props;

    const [isShowing, setIsShowing] = useState(false);
 
    return (
        <div className="iconbutton-div">
            <img
                className={isNotifications ? "iconbutton-bell" : "iconbutton-img"}
                src={imgSrc} alt="notification bell icon"
                onClick={() => setIsShowing(!isShowing)}
            />
            {
                isNotifications &&
                <div>
                    <div className="stackball-div"></div>
                    <NotificationsCard isShowing={isShowing} />
                </div>
            }
        </div>
    );
};

export default IconButton;
