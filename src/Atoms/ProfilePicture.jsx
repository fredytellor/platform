import React from "react";
import profilePic from "../assets/static/Picture@3x.png";

import "../Styles/Atoms/ProfilePicture.css"

const ProfilePicture = () => {
    return (
        <img className="profile-pic" src={profilePic} alt="profile" />
    );
}

export default ProfilePicture;