import React from "react";

import "../Styles/Atoms/ProgressItemText.css";

const ProgressItemText = (props) => {
    const {textLead,isHighlight}=props;
    return (
        <div className={isHighlight?"progressitemtext-highlight-div":"progressitemtext-div"}>
            <h2 className={isHighlight?"progressitemtext-highlight-h2":"progressitemtext-h2"}>{textLead}</h2>
        </div>
    );
};

export default ProgressItemText;