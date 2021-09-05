import React from "react";

import ProgressDivider from "../Atoms/ProgressDivider";
import HoursTopic from "./HoursTopic";
import HoursAmount from "./HoursAmount";

import "../Styles/Molecules/ProgressHours.css";


const ProgressHours = () => {
    return (
        <div className="progresshours-div">
            <div className="progresshours-side-div">
                <div className="progresshours-side-topic">
                    <HoursTopic isComplete={true} />

                </div>
                <div className="progresshours-side-hours">
                    <HoursAmount hours="20" />
                </div>
            </div>
            <ProgressDivider />        
            <div className="progresshours-side-div">
                <div className="progresshours-side-topic">
                    <HoursTopic />
                </div>
                <div className="progresshours-side-hours">
                    <HoursAmount hours="30" />
                </div>
            </div>
        </div>
    );
};

export default ProgressHours;