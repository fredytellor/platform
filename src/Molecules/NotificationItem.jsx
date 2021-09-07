import React from "react";
import NotificationImg from "../Atoms/NotificationImg";
import NotificationTitle from "../Atoms/NotificationTitle";
import NotificationSubtitle from "../Atoms/NotificationSubtitle";

import "../Styles/Molecules/NotificationItem.css";

const NotificationItem = (props) => {
    const { title, subtitle,pos } = props;
    return (
        <div className={pos === 1 ? "notificationitem-div" : pos === 2 ? "notificationitem2-div" : "notificationitem3-div"}>
            <NotificationImg />
            <NotificationTitle title={title} />
            <NotificationSubtitle subtitle={subtitle} />
        </div>
    );
};

export default NotificationItem;