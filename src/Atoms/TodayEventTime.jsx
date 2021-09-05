import React from "react";

import "../Styles/Atoms/TodayEventTime.css";

const TodayEventTime = (props) => {
    const { contentText } = props;
    return (
        <div className={"todayeventtime-div"}>
            <span className="todayeventtime-span">{contentText}</span>
        </div>
    );
};

export default TodayEventTime;