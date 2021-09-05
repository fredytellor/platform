import React from "react";

import "../Styles/Atoms/TodayEventImg.css";

const TodayEventImg = (props) => {
    const { imgSrc } = props;
    return (
        <div className="todayeventimg-div">
            <img className="todayeventimg-img" src={imgSrc} alt="notification bell icon" />
        </div>
    );
};

export default TodayEventImg;
