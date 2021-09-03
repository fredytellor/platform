import React from "react";
import Card from "../Atoms/Card";
import Subtitle from "../Atoms/Subtitle";
import LearningTopic from "../Molecules/LearningTopic";


import "../Styles/organisms/TopicCard.css";

const TopicCard = (props) => {
    const { subtitleText, topicIcon, topicText } = props;
    return (
        <Card>
            <Subtitle contentText={subtitleText}></Subtitle>
            <LearningTopic topicIcon={topicIcon} topicText={topicText} />
        </Card>
    );
};

export default TopicCard;