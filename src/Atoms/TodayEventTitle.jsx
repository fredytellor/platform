import React from "react";

import "../Styles/Atoms/TodayEventTitle.css";

const TodayEventTitle = (props) => {
    const {titleText}=props;
    return (
        <div className={"todayeventtitle-div"}>
            <h2 className="todayeventtitle-h2">{titleText}</h2>
        </div>
    );
};

export default TodayEventTitle;