import React from "react";
import EventsCard from "../Atoms/EventsCard";
import EventsTopic from "../Atoms/EventsTopic";
import MyTitle from "../Atoms/MyTitle";
import Divider from "../Atoms/Divider";
import TodayActivityCard from "../Molecules/TodayActivityCard";
import EventsSlideButton from "../Atoms/EventsSlideButton";
import EventsTitleCard from "../Molecules/EventsTitleCard";
import EventsSubjectCard from "../Atoms/EventsSubjectCard";

import thumbImg from "../assets/static/thumbnail@2x.png";

import "../Styles/Templates/Events.css";


const Events = () => {
    return (
        <div className="events-div">
            <MyTitle text="Events" />
            <div className="eventssection-div">
                <div className="eventssection-div-top">
                    <EventsCard>
                        <EventsSlideButton isLeft={true} />
                        <EventsSlideButton isLeft={false} />
                        <EventsTitleCard firstLine={"Youth Talent &"} secondLine="Education"/>
                        <EventsTitleCard firstLine={"May, 20"} isTime={true}/>
                        <EventsSubjectCard subject="SCIENCE"/>
                    </EventsCard>
                    <EventsTopic text="EVENTS TODAY" />
                    <Divider />
                </div>
                <div className="events-activities-div">
                    <TodayActivityCard imgSrc={thumbImg} timeText="10:30AM" titleText="Webinar: the basics of..." />
                    <TodayActivityCard imgSrc={thumbImg} timeText="2:15PM" titleText="Team Building Activity🔥" />
                </div>
            </div>
        </div>
    );
};

export default Events;