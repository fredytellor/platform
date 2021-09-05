import React from "react";
import ProgressHeader from "../Molecules/ProgressHeader";
import WarningCard from "../Molecules/WarningCard";
import ProgressCard from "../Organisms/ProgressCard";
import ProgressOverview from "../Organisms/ProgressOverview";
import DashboardTitle from "../Atoms/DashboardTitle";

import "../Styles/Templates/Progress.css";

const Progress = () => {
    return (
        <div className="progress-div">
            <ProgressOverview />
            <div className="progress-side-div">
                <ProgressHeader />
                <ProgressCard/>
                <WarningCard>
                    <DashboardTitle text="Confirm your account details" isWarning={true}/>
                    <DashboardTitle text="Please confirm your email and phone number. 😰" isSubWarning={true}/>
                    
                </WarningCard>
            </div>
        </div>
    );
};

export default Progress;