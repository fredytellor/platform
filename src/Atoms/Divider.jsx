import React from "react";

import "../Styles/Atoms/Divider.css";

const Divider = (props) => {
    const { isActivity } = props;
    return (<div className={isActivity !== true ? "divider-div" : "divider-activity-div"}></div>);
};

export default Divider;