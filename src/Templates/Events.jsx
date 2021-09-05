import React from "react";
import EventsTopic from "../Atoms/EventsTopic";
import MyTitle from "../Atoms/MyTitle";
import Divider from "../Atoms/Divider";
import EventSlider from "../Molecules/EventSlider";
import EventsActivities from "../Organisms/EventsActivities";

import thumbImg from "../assets/static/thumbnail@2x.png";

import "../Styles/Templates/Events.css";


const Events = () => {
    return (
        <div className="events-div">
            <MyTitle text="Events" />
            <div className="eventssection-div">
                <div className="eventssection-div-top">
                    <EventSlider />
                    <EventsTopic text="EVENTS TODAY" />
                    <Divider />
                </div>
                <EventsActivities thumbImg={thumbImg} />
            </div>
        </div>
    );
};

export default Events;