import React from "react";
import upArrow from "../assets/static/Arrow-Up-Bold@2x.png";
import downArrow from "../assets/static/Arrow-Down-Bold@2x.png";

import "../Styles/Atoms/ArrowIcon.css";

const ArrowIcon = (props) => {
    const { name } = props;
    let currentIcon = "";
    if (name === 'up') {
        currentIcon = upArrow;
    } else {
        currentIcon = downArrow;
    }
    return (
        <div className="arroicon-div">
            <img
                className="arrow-img"
                src={currentIcon}
                alt={`icon ${name}`}
            />
        </div>
    );
};

export default ArrowIcon;