import React from "react";

import "../Styles/Organisms/NotificationsCard.css";

const NotificationsCard = (props) => {
    const { isShowing } = props;
    return (
        <div className={isShowing ? "notificationscard-div" : "notificationscard-hidden"}>
        </div>
    );
};

export default NotificationsCard;