import React from "react";

import "../Styles/Atoms/EventsSubjectCard.css";

const EventsSubjectCard = (props) => {
    const { subject } = props;
    return (
        <div className="eventssubjectcard-div">
            <span>{subject}</span>
        </div>
    );
};

export default EventsSubjectCard;