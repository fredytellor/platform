import React from "react";

import "../Styles/Atoms/NotificationTitle.css";

const NotificationTitle = (props) => {
    const { title } = props;
    return (<h2 className="notificationtitle">{title}</h2>);
};

export default NotificationTitle;