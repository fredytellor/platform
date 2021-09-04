import React from "react";
import DashboardImage from "../Atoms/DashboardImage";
import DashboardCard from "../Atoms/DashboardCard";
import DashboardTitle from "../Atoms/DashboardTitle";
import DashboardSubtitle from "../Atoms/DashboardSubtitle";

import rocketman from "../assets/static/rocketman@2x.png";

const DashboardSection = () => {
    return (
        <DashboardCard>
            <DashboardImage imgSrc={rocketman} />
            <DashboardTitle text="Welcome back, Clarence" />
            <DashboardSubtitle text="Ta-da! You're up to date 🥳" />
        </DashboardCard>
    );
}

export default DashboardSection;