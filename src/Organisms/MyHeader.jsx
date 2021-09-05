import React from "react";
import Logo from "../Atoms/Logo";
import SearchInput from "../Atoms/SearchInput";
import Profile from "../Molecules/Profile";
import ProfileActions from "../Molecules/ProfileActions";

import "../Styles/organisms/MyHeader.css";

const MyHeader = () => {
    return (
        <>
            <div className="myheader-div">
                <Logo className="myheader-logo" />
                <SearchInput className="myheader-searchinput" placeholderText="Search and find" />
                <div className="myheader-profile-div">
                    <ProfileActions className="myheader-profileactions" />
                    <Profile className="myheader-profile" />
                </div>
            </div>
        </>
    );
}

export default MyHeader;