import React from "react";
import ProgressItem from "../Molecules/ProgressItem";

import "../Styles/Organisms/ProgressCard.css";


const ProgressCard = () => {
    return (<div className="progresscard-div">
        <ProgressItem textLead="Total Webinars" number="9"/>
        <ProgressItem textLead="Pending Assignments" number="0"/>
        <ProgressItem textLead="Total Units" number="5"/>
        <ProgressItem textLead="Total Readings" number="14"/>
        <ProgressItem textLead="Total Videos" number="5" isHighlight={true}/>
    </div>);
};

export default ProgressCard;