import React from "react";

import "../Styles/Atoms/ActivityIcon.css";

const ActivityIcon = (props) => {
    const { iconSrc,isArrow }=props;
    return (
        <div className={isArrow?"activityicon-div-arrow":"activityicon-div"}>
            <img className={isArrow?"activityicon-img-arrow":"activityicon-img"} src={iconSrc} alt="activity card icon"/>
        </div>
    );
};

export default ActivityIcon;
