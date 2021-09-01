import React from "react";
import notificationBell from "../assets/static/Notification-Bold@3x.png";
import chatImg from "../assets/static/Chat-Bold@3x.png";

import "../Styles/Molecules/ProfileActions.css";

const ProfileActions = () => {
    return (
        <>
            <div className="profile-actions-div">
                <div className="profile-actions-add-div">
                    + Add
                </div>
                <img className="profile-actions-img" src={notificationBell} alt="notification bell icon" />
                <img className="profile-actions-img" src={chatImg} alt="chat icon" />
            </div>
        </>
    );
};

export default ProfileActions;