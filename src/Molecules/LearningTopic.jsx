import React from "react";
import MyTitle from "../Atoms/MyTitle";
import LearningIcon from "../Atoms/LearningIcon";

import "../Styles/Molecules/LearningTopic.css";

const LearningTopic = (props) => {
    const { topicIcon, topicText } = props;
    return (
        <div className="learningtopic-div">
            <MyTitle text={topicText} />
            <LearningIcon imgSrc={topicIcon} />
        </div>
    );
};

export default LearningTopic;
