import React from "react";
import "../Styles/Atoms/EventsTopic.css"

const EventsTopic = (props) => {
    const {text}=props;
    return (<h2 className="eventstopic-h2">{text}</h2>);
};

export default EventsTopic;