import React from "react";
import TopicCard from "../Organisms/TopicCard";
import MyTitle from "../Atoms/MyTitle";
import DashboardImage from "../Atoms/DashboardImage";
import DashboardCard from "../Atoms/DashboardCard";
import DashboardTitle from "../Atoms/DashboardTitle";
import DashboardSubtitle from "../Atoms/DashboardSubtitle";

import usaFlag from "../assets/static/usa-flag-icon@3x.png";
import rocketman from "../assets/static/rocketman@2x.png";


import "../Styles/Templates/Dashboard.css";



const Dashboard = () => {
    return (
        <div className="dashboard-div">
            <div className="dashboard-top-div">
                <MyTitle text="Dashboard" />
                <TopicCard subtitleText="Currently learning" topicIcon={usaFlag} topicText="English" />
            </div>
            <DashboardCard>
                <DashboardImage imgSrc={rocketman}/>
                <DashboardTitle text="Welcome back, Clarence"/>
                <DashboardSubtitle text="Ta-da! You're up to date 🥳"/>
            </DashboardCard>
        </div>
    );
};

export default Dashboard;