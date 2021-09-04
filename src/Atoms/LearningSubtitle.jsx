import React from "react";

import "../Styles/Atoms/LearningSubtitle.css";

const LearningSubtitle = (props) => {
    const { contentText } = props;
    return (
        <div className={"learningsubtitle-div"}>
            <span className="span-learnignsubtitle">{contentText}</span>
        </div>
    );
};

export default LearningSubtitle;