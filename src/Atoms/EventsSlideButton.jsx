import React from "react";
import leftArrow from "../assets/static/leftarrow.png";
import rigthArrow from "../assets/static/right-arrow.png";

import "../Styles/Atoms/EventsSlideButton.css";

const EventsSlideButton = (props) => {
    const { isLeft } = props;
    return (
        <div className={isLeft?"eventsslidebutton-div":"eventsslidebutton-div-right"}>
            <img className="eventsslidebutton-img" imgSrc={isLeft ? leftArrow : rigthArrow} alt={isLeft?"previus slide":"next slide"}/>
        </div>
    );
};

export default EventsSlideButton;