import React from "react";

import MyTitle from "../Atoms/MyTitle";
import CircularProgressBar from "../Molecules/CircularProgressBar";
import ProgressHours from "../Molecules/ProgressHours";

import "../Styles/Organisms/ProgressOverview.css";

const ProgressOverview=()=>{
    return(
    <div className="progressoverview-div">
        <MyTitle isProgress={true} text="Progress overview"/>
        <CircularProgressBar/>
        <ProgressHours/>
    </div>
    );
};

export default ProgressOverview;