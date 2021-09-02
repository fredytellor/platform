import React from "react";
import notificationBell from "../assets/static/Notification-Bold@3x.png";
import chatImg from "../assets/static/Chat-Bold@3x.png";
import TextButton from "../Atoms/TextButton";
import IconButton from "../Atoms/IconButton";

import "../Styles/Molecules/ProfileActions.css";

const ProfileActions = () => {
    return (
        <>
            <div className="profile-actions-div">
                <TextButton textContent="+ Add"/>
                {/* <img className="profile-actions-img" src={notificationBell} alt="notification bell icon" />
                <img className="profile-actions-img" src={chatImg} alt="chat icon" /> */}
                <IconButton imgSrc={notificationBell}/>
                <IconButton imgSrc={chatImg}/>
            </div>
        </>
    );
};

export default ProfileActions;