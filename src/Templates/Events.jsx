import React from "react";
import EventsCard from "../Atoms/EventsCard";
import EventsTopic from "../Atoms/EventsTopic";
import MyTitle from "../Atoms/MyTitle";
import Divider from "../Atoms/Divider";
import EventsSlideButton from "../Atoms/EventsSlideButton";
import EventsTitleCard from "../Molecules/EventsTitleCard";
import EventsSubjectCard from "../Atoms/EventsSubjectCard";
import EventsActivities from "../Organisms/EventsActivities";

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
                <EventsActivities thumbImg={thumbImg}/>
            </div>
        </div>
    );
};

export default Events;