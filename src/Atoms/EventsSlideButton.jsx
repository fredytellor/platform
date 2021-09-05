import React from "react";
import leftArrow from "../assets/static/left-arrow.png";
import rigthArrow from "../assets/static/right-arrow.png";

import "../Styles/Atoms/EventsSlideButton.css";

const EventsSlideButton = (props) => {
    const { isLeft } = props;
    return (
        <div className={isLeft?"eventsslidebutton-div":"eventsslidebutton-div-right"}>
            <img className="eventsslidebutton-img" src={isLeft ? leftArrow : rigthArrow} alt={isLeft?"previus":"next"}/>
        </div>
    );
};

export default EventsSlideButton;