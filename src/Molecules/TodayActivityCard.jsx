import React from "react";
import TodayEventCard from "../Atoms/TodayEventCard";
import TodayEventTime from "../Atoms/TodayEventTime";
import TodayEventImg from "../Atoms/TodayEventImg";
import TodayEventTitle from "../Atoms/TodayEventTitle";

const TodayActivityCard = (props) => {
    const { imgSrc, timeText, titleText } = props;
    return (
        <TodayEventCard>
            <TodayEventImg imgSrc={imgSrc} />
            <TodayEventTime contentText={timeText} />
            <TodayEventTitle titleText={titleText} />
        </TodayEventCard>
    );
};

export default TodayActivityCard;