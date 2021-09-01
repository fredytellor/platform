import React from "react";
import profilePic from "../assets/static/Picture@3x.png"

const ProfilePicture = () => {
    return (
        <img className="profile-pic" src={profilePic} alt="profile picture" />
    );
}

export default ProfilePicture;