import React from "react";
import ActivityHeader from "../Molecules/ActivityHeader";
import ActivityCard from "../Organisms/ActivityCard";

import followerIcon from "../assets/static/ic-followers@2x.png";
import eventsIcon from "../assets/static/ic-events@2x.png";
import assignmentsIcon from "../assets/static/ic-assignments@2x.png";

import "../Styles/Templates/Activities.css";

const Activities = () => {
    return (
        <div className="activities-div">
        <ActivityHeader title="Activity" />
        <ActivityCard iconSrc={followerIcon} leadText="You have new 5 followers including" highlight="Kathryn Crawford" otherHighlight="Piper Shaw"/>
        <ActivityCard iconSrc={eventsIcon} leadText="3 new events were added to your calendar"/>
        <ActivityCard iconSrc={assignmentsIcon} leadText="You have 3 pending readings to complete 🤓"/>
        </div>
    );
};

export default Activities;