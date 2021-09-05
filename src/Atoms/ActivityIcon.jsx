import React from "react";

import "../Styles/Atoms/ActivityIcon.css";

const ActivityIcon = (props) => {
    const { iconSrc,isArrow,isOpen }=props;
    return (
        <div className={isArrow?isOpen?"activityicon-div-arrow-open":"activityicon-div-arrow":isOpen?"activityicon-div-open":"activityicon-div"}>
            <img className={isArrow?"activityicon-img-arrow":"activityicon-img"} src={iconSrc} alt="activity card icon"/>
        </div>
    );
};

export default ActivityIcon;
