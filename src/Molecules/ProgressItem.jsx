import React from "react";
import ProgressItemNumber from "../Atoms/ProgressItemNumber";
import ProgressItemText from "../Atoms/ProgressItemText";

import "../Styles/Molecules/ProgressItem.css";

const ProgressItem = (props) => {
    const {number,textLead ,isHighlight}=props;
    return (
        <div className={isHighlight?"progressitem-highlight-div":"progressitem-div"}>
            <ProgressItemText textLead={textLead} isHighlight={isHighlight}/>
            <ProgressItemNumber number={number} isHighlight={isHighlight}/>
        </div>
    );
}

export default ProgressItem;