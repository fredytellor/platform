import React from "react";

import "../Styles/Atoms/DashboardImage.css";

const DashboardImage = (props) => {
    const { imgSrc } = props;
    return (
        <img className="dashboardimage-img" src={imgSrc} alt="Dashboard lead" />
    );
};

export default DashboardImage;