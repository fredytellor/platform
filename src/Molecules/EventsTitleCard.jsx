import React from "react";
import MyTitle from "../Atoms/MyTitle";

import "../Styles/Molecules/EventsTitleCard.css";

const EventsTitleCard = (props) => {
    const { isTime, firstLine, secondLine } = props;
    return (<div className={isTime ? "events-title-time-div" : "events-title-div"}>
        <MyTitle isEvents={true} text={firstLine} />
        {isTime !== true && <MyTitle isEvents={true} text={secondLine} />}
    </div>);
};

export default EventsTitleCard;