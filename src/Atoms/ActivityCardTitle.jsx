import React from "react";

import "../Styles/Atoms/ActivityCardTitle.css";

const ActivityCardTitle = (props) => {
    const {text,isHighlight}=props;
    return (
        <div className="activitycardtitle-div">            
        <h2 className={isHighlight?"activitycardtitle-highlight":"activitycardtitle-h2"}>{text}</h2>
        </div>
    );
};

export default ActivityCardTitle;