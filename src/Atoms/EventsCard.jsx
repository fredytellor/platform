import React from "react";

import "../Styles/Atoms/EventsCard.css";

const EventsCard = (props,) => {
    const { index } = props;
    return (
        <div className={`eventscard-div${index}`}>
            {props.children}
        </div>
    );
}

export default EventsCard;