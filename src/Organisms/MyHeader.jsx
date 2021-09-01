import React from "react";
import Logo from "../Atoms/Logo";
import SearchInput from "../Atoms/SearchInput";

import "../Styles/organisms/MyHeader.css";

const MyHeader = () => {
    return (
        <>
            <div className="myheader-div">
                <Logo/>
                <SearchInput placeholderText="Search and find"/>
            </div>
        </>
    );
}

export default MyHeader;