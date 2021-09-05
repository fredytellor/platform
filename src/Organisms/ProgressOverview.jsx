import React from "react";

import MyTitle from "../Atoms/MyTitle";
import CircularProgressBar from "../Molecules/CircularProgressBar";
// import CircularTest from "../Molecules/CircularTest";
import ProgressHours from "../Molecules/ProgressHours";

import "../Styles/Organisms/ProgressOverview.css";

const ProgressOverview=()=>{
    return(
    <div className="progressoverview-div">
        <MyTitle isProgress={true} text="Progress overview"/>
        <CircularProgressBar/>
        {/* <CircularTest/> */}
        <ProgressHours/>
    </div>
    );
};

export default ProgressOverview;