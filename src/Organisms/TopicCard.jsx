import React from "react";
import Card from "../Atoms/Card";
import LearningSubtitle from "../Atoms/LearningSubtitle";
import LearningTopic from "../Molecules/LearningTopic";


import "../Styles/organisms/TopicCard.css";

const TopicCard = (props) => {
    const { subtitleText, topicIcon, topicText } = props;
    return (
      //  <div className="topiccard-div">
            <Card>
                <LearningSubtitle contentText={subtitleText}></LearningSubtitle>
                <LearningTopic topicIcon={topicIcon} topicText={topicText} />
            </Card>
        //</div>
    );
};

export default TopicCard;