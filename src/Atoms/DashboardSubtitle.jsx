import React from "react";
import "../Styles/Atoms/DashboardSubtitle.css"

const DashboardSubtitle = (props) => {
    const {text}=props;
    return (<h1 className="dashboardsubtitle-h1">{text}</h1>);
};

export default DashboardSubtitle;