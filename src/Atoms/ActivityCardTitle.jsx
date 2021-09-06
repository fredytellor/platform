import React from "react";

import "../Styles/Atoms/ActivityCardTitle.css";

const ActivityCardTitle = (props) => {
    const { text, isHighlight, isOpen } = props;
    return (
        <div className={isOpen ? isHighlight ? "activitycardtitle-div-open-highlight" : "activitycardtitle-div-open" : "activitycardtitle-div"}>
            <h2 className={isHighlight ? "activitycardtitle-highlight" : "activitycardtitle-h2"}>{text}</h2>
        </div>
    );
};

export default ActivityCardTitle;