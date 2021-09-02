import React from "react";

import "../Styles/Atoms/IconButton.css";

const IconButton = (props) => {
    const { imgSrc } = props;
    return (
        <div className="iconbutton-div">
            <img className="iconbutton-img" src={imgSrc} alt="notification bell icon" />
        </div>
    );
};

export default IconButton;
