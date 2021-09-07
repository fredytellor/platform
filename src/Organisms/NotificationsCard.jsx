import React from "react";
import NotificationItem from "../Molecules/NotificationItem";


import "../Styles/Organisms/NotificationsCard.css";

const NotificationsCard = (props) => {
    const { isShowing } = props;
    return (
        <div className={isShowing ? "notificationscard-div" : "notificationscard-hidden"}>
            <NotificationItem  key="1" pos={1} title={"You have a new session to re..."} subtitle={"Today,10:30AM"} />
            <NotificationItem key="2" pos={2} title={"You have a virtual session..."} subtitle={"Today,10:30AM"} />
            <NotificationItem key="3" pos={3} title={"You have a face to face sta..."} subtitle={"Today,10:30AM"} />
        </div>
    );
};

export default NotificationsCard;