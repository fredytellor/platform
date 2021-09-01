import React from "react";
import Subtitle from "../Atoms/Subtitle";
import ArrowIcon from "../Atoms/ArrowIcon";
import ProfilePicture from "../Atoms/ProfilePicture";

import "../Styles/Molecules/Profile.css";

const Profile = () => {
    return (
        <>
            <div className="profile-div">
                <Subtitle contentText="Fredy Tello" />
                <ProfilePicture />
                <ArrowIcon />
            </div>
        </>
    );
};

export default Profile;