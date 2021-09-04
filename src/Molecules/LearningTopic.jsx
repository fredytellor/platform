import React from "react";
import LearningTitle from "../Atoms/LearningTitle";
import LearningIcon from "../Atoms/LearningIcon";

import "../Styles/Molecules/LearningTopic.css";

const LearningTopic = (props) => {
    const { topicIcon, topicText } = props;
    return (
        <div className="learningtopic-div">
            <LearningTitle text={topicText} />
            <LearningIcon imgSrc={topicIcon} />
        </div>
    );
};

export default LearningTopic;
