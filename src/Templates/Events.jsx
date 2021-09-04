import React from "react";
import EventsCard from "../Atoms/EventsCard";
import EventsTopic from "../Atoms/EventsTopic";
import MyTitle from "../Atoms/MyTitle";
import Divider from "../Atoms/Divider";


import "../Styles/Templates/Events.css";

const Events = () => {
    return (
        <div className="events-div">
            <MyTitle text="Events" />
            <div className="eventssection-div">
                <EventsCard>

                </EventsCard>
                <EventsTopic text="EVENTS TODAY" />
                <Divider/>
            </div>
        </div>
    );
};

export default Events;