import React from "react";
import TodayActivityCard from "../Molecules/TodayActivityCard";

import "../Styles/Organisms/EventsActivities.css";

const EventsActivities = (props) => {
    const {thumbImg}=props;
    return (
        <div className="events-activities-div">
            <TodayActivityCard imgSrc={thumbImg} timeText="10:30AM" titleText="Webinar: the basics of..." />
            <TodayActivityCard imgSrc={thumbImg} timeText="2:15PM" titleText="Team Building Activity🔥" />
        </div>
    );
};

export default EventsActivities;
