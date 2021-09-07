import React from "react";
import myLogo from "../assets/static/thumb-notification@2x.png";

import "../Styles/Atoms/NotificationImg.css";

const NotificationImg = () => {
    return (<img className="notificationimg" src={myLogo} alt="push lead" />);
};

export default NotificationImg;