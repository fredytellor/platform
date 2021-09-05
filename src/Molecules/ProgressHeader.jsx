import React from "react";
import MyTitle from "../Atoms/MyTitle";
import Divider from "../Atoms/Divider";

import "../Styles/Molecules/ProgressHeader.css";

const ProgressHeader = (props) => {
    return (
        <div className="progressheader-div">
            <MyTitle text="Progress"/>
            <Divider isProgress={true}/>
        </div>
    );
};

export default ProgressHeader;