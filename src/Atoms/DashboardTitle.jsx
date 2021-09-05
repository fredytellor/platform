import React from "react";
import "../Styles/Atoms/DashboardTitle.css"

const DashboardTitle = (props) => {
    const { text, isWarning, isSubWarning } = props;
    return (<h1 className={isWarning ? "dashboardtitle-h1-warning" : isSubWarning ? "dashboardtitle-h1-subwarning" : "dashboardtitle-h1"}>{text}</h1>);
};

export default DashboardTitle;