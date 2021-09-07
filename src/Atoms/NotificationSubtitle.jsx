import React from "react";

import "../Styles/Atoms/NotificationSubtitle.css";

const NotificationSubtitle = (props) => {
    const { subtitle } = props;
    return (<h3 className="notificationsubtitle">{subtitle}</h3>);
};

export default NotificationSubtitle;