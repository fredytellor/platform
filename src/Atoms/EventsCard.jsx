import React from "react";

import "../Styles/Atoms/EventsCard.css";

const EventsCard = ({children}) => {
    return (
        <div className="eventscard-div">
            {children}
        </div>
    );
}

export default EventsCard;