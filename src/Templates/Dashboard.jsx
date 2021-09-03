import React from "react";
import TopicCard from "../Organisms/TopicCard";
import MyTitle from "../Atoms/MyTitle";

import usaFlag from "../assets/static/usa-flag-icon@3x.png";

import "../Styles/Templates/Dashboard.css";

const Dashboard = () => {
    return(<div className="dashboard-div">
        <div className="dashboard-top-div">
            <MyTitle text="Dashboard"/>
            <TopicCard subtitleText="Currently learning" topicIcon={usaFlag} topicText="English" />
        </div>
    </div>);
};

export default Dashboard;