import React from "react";

import "../Styles/Atoms/DashboardCard.css";

const DashboardCard = ({children}) => {
    return (
        <div className="dashboardcard-div">
            {children}
        </div>
    );
};

export default DashboardCard;