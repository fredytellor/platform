import React from "react";
import "../Styles/Atoms/DashboardTitle.css"

const DashboardTitle = (props) => {
    const {text}=props;
    return (<h1 className="dashboardtitle-h1">{text}</h1>);
};

export default DashboardTitle;