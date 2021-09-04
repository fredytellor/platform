import React from "react";

const EventsCard = ({children}) => {
    return (
        <div className="eventscard-div">
            {children}
        </div>
    );
}

export default EventsCard;