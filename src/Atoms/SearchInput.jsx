import React from "react";
import "../Styles/Atoms/SearchInput.css";
import magnifyIcon from "../assets/static/magnify-icon.png"

const SearchInput = (props) => {
    const { placeholderText } = props;
    return (<>
        <div className="search-input-div">
            <input type="text" placeholder={placeholderText} />
            <img className="magnify-icon" src={magnifyIcon} alt="magnify icon"/>
        </div>
    </>);
};

export default SearchInput;