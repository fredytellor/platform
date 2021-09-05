import React from "react";
import Card from "../Atoms/Card";
import LearningSubtitle from "../Atoms/LearningSubtitle";
import LearningTopic from "../Molecules/LearningTopic";

import "../Styles/organisms/TopicCard.css";

const TopicCard = (props) => {
    const { subtitleText, topicIcon, topicText } = props;
    return (
            <Card>
                <LearningSubtitle contentText={subtitleText}></LearningSubtitle>
                <LearningTopic topicIcon={topicIcon} topicText={topicText} />
            </Card>
    );
};

export default TopicCard;