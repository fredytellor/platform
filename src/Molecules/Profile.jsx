import React from "react";
import Subtitle from "../Atoms/Subtitle";
import ArrowIcon from "../Atoms/ArrowIcon";
import ProfilePicture from "../Atoms/ProfilePicture";

import "../Styles/Molecules/Profile.css";

const Profile = () => {
    return (
        <>
            <div className="profile-div">
                <Subtitle className="profile-name" contentText="Clarence Russell" />
                <ProfilePicture className="profile-picture"/>
                <ArrowIcon className="profile-arrow"/>
            </div>
        </>
    );
};

export default Profile;