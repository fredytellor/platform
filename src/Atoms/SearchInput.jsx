import React from "react";
import "../Styles/Atoms/SearchInput.css";

const SearchInput = (props) => {
    const {placeholderText}=props;
    return (<>
        <input type="text" placeholder={placeholderText} />
    </>);
};

export default SearchInput;