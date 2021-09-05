import React from "react";
import ProgressHeader from "../Molecules/ProgressHeader";
import ProgressOverview from "../Organisms/ProgressOverview";

import "../Styles/Templates/Progress.css";

const Progress = () => {
    return (
        <div className="progress-div">
            <ProgressOverview />
            <div className="progress-side-div">
                <ProgressHeader />
            </div>
        </div>
    );
};

export default Progress;