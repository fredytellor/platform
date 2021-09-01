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
                <Logo/>
                <SearchInput placeholderText="Search and find"/>
                <ProfileActions/>
                <Profile/>
            </div>
        </>
    );
}

export default MyHeader;