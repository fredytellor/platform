import React from "react";

import "../Styles/Atoms/Divider.css";

const Divider = (props) => {
    const { isActivity, isProgress } = props;
    return (<div className={isActivity === true ? "divider-activity-div" : isProgress ? "divider-progress-div" : "divider-div"}></div>);
};

export default Divider;