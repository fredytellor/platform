import React from "react";

import "../Styles/Atoms/ProgressItemNumber.css";

const ProgressItemNumber = (props) => {
    const { number, isHighlight } = props;
    return (<div className={isHighlight ? "progressitemnumber-highlight-div" : "progressitemnumber-div"}>
        <h1 className={isHighlight ? "progressitemnumber-highlight-h1" : "progressitemnumber-h1"}>{number}</h1>
    </div>);
};

export default ProgressItemNumber;