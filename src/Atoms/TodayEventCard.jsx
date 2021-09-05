import React from "react";

import "../Styles/Atoms/TodayEventCard.css";

const TodayEventCard = ({ children }) => {
    return (
        <div className="todayeventcard-div">
            {children}
        </div>
    );
};

export default TodayEventCard;